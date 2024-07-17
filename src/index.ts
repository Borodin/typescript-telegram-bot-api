import { EventEmitter } from 'events';
import axios from 'axios';
import FormData from 'form-data';
import { promisify } from 'util';
import { Readable } from 'stream';

import {
  Update,
  UpdateType,
  MessageEntity,
  Message,
  MessageId,
  LinkPreviewOptions,
  ReplyParameters,
  InlineKeyboardMarkup,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ForceReply,
  User,
  InputFile,
  InputMediaAudio,
  InputMediaDocument,
  InputMediaPhoto,
  InputMediaVideo,
  InputPollOption,
  UserProfilePhotos,
  ChatPermissions,
  ChatInviteLink,
  ChatFullInfo,
  Sticker,
  ReactionType,
  ChatMember,
  ForumTopic,
  BusinessConnection,
  BotCommandScope,
  BotCommand,
  BotName,
  BotDescription,
  BotShortDescription,
  MenuButton,
  ChatAdministratorRights,
  InputMedia,
  Poll,
  ChatBoost,
  StickerSet,
  InputSticker,
  InlineQueryResult,
  InlineQueryResultsButton,
  SentWebAppMessage,
  LabeledPrice,
  ShippingOption,
  MaskPosition,
  PassportElementError,
  GameHighScore,
  ErrorResponse,
  ParseMode,
  Response,
  EventTypes,
  MessageTypes,
  StarTransactions,
  InputPaidMedia,
  WebhookInfo,
  Currencies,
} from './types/';
import * as TelegramTypes from './types/';
import { TelegramError } from './errors';
import { Polling } from './pooling';

const wait: (ms: number) => Promise<void> = promisify(setTimeout);

type allEmittedTypes = EventTypes & MessageTypes;

export class TelegramBot extends EventEmitter {
  private readonly polling: Polling;
  botToken: string;
  testEnvironment: boolean;
  baseURL: string;
  autoRetry: boolean;
  autoRetryLimit: number;
  allowedUpdates: UpdateType[];
  pollingTimeout: number;

  constructor(options: {
    botToken: string;
    testEnvironment?: boolean;
    baseURL?: string;
    autoRetry?: boolean;
    autoRetryLimit?: number;
    allowedUpdates?: UpdateType[];
    pollingTimeout?: number;
  }) {
    super();
    this.testEnvironment = options.testEnvironment || false;
    this.botToken = options.botToken;
    this.baseURL = options.baseURL || 'https://api.telegram.org';
    this.autoRetry = options.autoRetry ?? true;
    this.autoRetryLimit = options.autoRetryLimit || 0;
    this.allowedUpdates = options.allowedUpdates || [];
    this.pollingTimeout = options.pollingTimeout || 50;
    this.polling = new Polling(this);
  }

  public static isTelegramError(error: unknown): error is TelegramError {
    return error instanceof TelegramError;
  }

  async startPolling() {
    await this.polling.start();
  }

  async stopPolling() {
    await this.polling.stop();
  }

  private async request(
    url: string,
    options?: Record<string, unknown>,
    abortController?: AbortController,
  ): Promise<Response> {
    const formData = this.createFormData(options);
    const response = await axios({
      method: 'POST',
      url,
      data: formData,
      signal: abortController?.signal,
      responseType: 'text',
      transitional: {
        silentJSONParsing: false,
        forcedJSONParsing: false,
      },
      validateStatus: () => true,
    });
    try {
      return JSON.parse(response.data.toString()) as Response;
    } catch (error) {
      throw new Error(`Invalid response`);
    }
  }

  private createFormData(options?: Record<string, unknown>): FormData {
    const formData = new FormData();
    if (options) {
      for (const [key, value] of Object.entries(options)) {
        if (value !== undefined) {
          if (typeof value === 'boolean') {
            formData.append(key, String(value));
          } else if (value instanceof Buffer) {
            formData.append(key, value, {
              filename: 'file',
              contentType: 'application/octet-stream',
            });
          } else if (value instanceof File || value instanceof Readable) {
            formData.append(key, value);
          } else if (typeof value === 'object' && !Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else {
            formData.append(key, value);
          }
        }
      }
    } else {
      formData.append('empty', 'empty');
    }
    return formData;
  }

  private async callApi<T>(
    method: string,
    options?: Record<string, unknown>,
    abortController?: AbortController,
  ): Promise<T> {
    const url = `${this.baseURL}/bot${this.botToken}${this.testEnvironment ? '/test' : ''}/${method}`;
    const response = await this.request(url, options, abortController);
    if (response.ok) {
      return response.result as T;
    } else {
      const error = response as ErrorResponse;
      if (
        this.autoRetry &&
        error.parameters?.retry_after &&
        error.parameters?.retry_after < this.autoRetryLimit
      ) {
        await wait(error.parameters.retry_after * 1000);
        return await this.callApi(method, options);
      } else {
        throw new TelegramError(error);
      }
    }
  }

  async processUpdate(update: Update) {
    this.polling.emitUpdate(update);
  }

  /**
   * ## getUpdates
   * Use this method to receive incoming updates using long polling [wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling). Returns an Array of Update objects.
   * @see https://core.telegram.org/bots/api#getupdates
   */
  async getUpdates(
    options?: {
      offset?: number;
      limit?: number;
      timeout?: number;
      allowed_updates?: UpdateType[];
    },
    abortController?: AbortController,
  ): Promise<Update[]> {
    return await this.callApi(
      'getUpdates',
      {
        ...options,
        allowed_updates: JSON.stringify(options?.allowed_updates),
      },
      abortController,
    );
  }

  /**
   * ## setWebhook
   * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update
   * for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case
   * of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
   *
   * If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter
   * ```secret_token```. If specified, the request will contain a header ```“X-Telegram-Bot-Api-Secret-Token”``` with
   * the secret token as content.
   * @see https://core.telegram.org/bots/api#setwebhook
   */
  async setWebhook(options: {
    url: string;
    certificate?: InputFile;
    ip_address?: string;
    max_connections?: number;
    allowed_updates?: UpdateType[];
    drop_pending_updates?: boolean;
    secret_token?: string;
  }): Promise<true> {
    return await this.callApi('setWebhook', {
      ...options,
      allowed_updates: JSON.stringify(options?.allowed_updates),
    });
  }

  /**
   * ## deleteWebhook
   * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
   * @see https://core.telegram.org/bots/api#deletewebhook
   */
  async deleteWebhook(options?: {
    drop_pending_updates?: boolean;
  }): Promise<true> {
    return await this.callApi('deleteWebhook', options);
  }

  /**
   * ## getWebhookInfo
   * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object.
   * If the bot is using getUpdates, will return an object with the url field empty.
   * @see https://core.telegram.org/bots/api#getwebhookinfo
   */
  async getWebhookInfo(): Promise<WebhookInfo | { url: '' }> {
    return await this.callApi('getWebhookInfo');
  }

  /**
   * ## getMe
   * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
   * @see https://core.telegram.org/bots/api#getme
   */
  async getMe(): Promise<User> {
    return await this.callApi('getMe');
  }

  /**
   * ## sendMessage
   * Use this method to send text messages. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendmessage
   */
  async sendMessage(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    text: string;
    parse_mode?: ParseMode;
    entities?: MessageEntity[];
    link_preview_options?: LinkPreviewOptions;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendMessage', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## forwardMessage
   * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
   * @see https://core.telegram.org/bots/api#forwardmessage
   */
  async forwardMessage(options: {
    chat_id: number | string;
    message_thread_id?: number;
    from_chat_id: number | string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_id: number;
  }): Promise<Message> {
    return await this.callApi('forwardMessage', options);
  }

  /**
   * ## forwardMessages
   * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
   * @see https://core.telegram.org/bots/api#forwardmessages
   */
  async forwardMessages(options: {
    chat_id: number | string;
    message_thread_id?: number;
    from_chat_id: number | string;
    message_ids: number[];
    disable_notification?: boolean;
    protect_content?: boolean;
  }): Promise<MessageId[]> {
    return await this.callApi('forwardMessages', {
      ...options,
      message_ids: JSON.stringify(options.message_ids),
    });
  }

  /**
   * ## copyMessage
   * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
   * @see https://core.telegram.org/bots/api#copymessage
   */
  async copyMessage(options: {
    chat_id: number | string;
    message_thread_id?: number;
    from_chat_id: number | string;
    message_id: number;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<MessageId> {
    return await this.callApi('copyMessage', {
      ...options,
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## copyMessages
   * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
   * @see https://core.telegram.org/bots/api#copymessages
   */
  async copyMessages(options: {
    chat_id: number | string;
    message_thread_id?: number;
    from_chat_id: number | string;
    message_ids: number[];
    disable_notification?: boolean;
    protect_content?: boolean;
    remove_caption?: boolean;
  }): Promise<MessageId[]> {
    return await this.callApi('copyMessages', {
      ...options,
      message_ids: JSON.stringify(options.message_ids),
    });
  }

  /**
   * ## sendPhoto
   * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
   * @see https://core.telegram.org/bots/api#sendphoto
   */
  async sendPhoto(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    photo: InputFile | string;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    has_spoiler?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<MessageId> {
    return await this.callApi('sendPhoto', {
      ...options,
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendAudio
   * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
   *
   * For sending voice messages, use the sendVoice method instead.
   * @see https://core.telegram.org/bots/api#sendaudio
   */
  async sendAudio(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    audio: InputFile | string;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    duration?: number;
    performer?: string;
    title?: string;
    thumbnail?: InputFile | string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendAudio', {
      ...options,
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /** ## sendDocument
   * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
   * @see https://core.telegram.org/bots/api#senddocument
   */
  async sendDocument(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    document: InputFile | string;
    thumbnail?: InputFile | string;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    disable_content_type_detection?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendDocument', {
      ...options,
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendVideo
   * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
   * @see https://core.telegram.org/bots/api#sendvideo
   */
  async sendVideo(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    video: InputFile | string;
    duration?: number;
    width?: number;
    height?: number;
    thumbnail?: InputFile | string;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    has_spoiler?: boolean;
    supports_streaming?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendVideo', {
      ...options,
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendAnimation
   * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
   * @see https://core.telegram.org/bots/api#sendanimation
   */
  async sendAnimation(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    animation: InputFile | string;
    duration?: number;
    width?: number;
    height?: number;
    thumbnail?: InputFile | string;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    has_spoiler?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendAnimation', {
      ...options,
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendVoice
   * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
   * @see https://core.telegram.org/bots/api#sendvoice
   */
  async sendVoice(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    voice: InputFile | string;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    duration?: number;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendVoice', {
      ...options,
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendVideoNote
   * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendvideonote
   */
  async sendVideoNote(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    video_note: InputFile | string;
    duration?: number;
    length?: number;
    thumbnail?: InputFile | string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendVideoNote', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendPaidMedia
   * Use this method to send paid media to channel chats. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendpaidmedia
   */
  async sendPaidMedia(options: {
    chat_id: number | string;
    star_count: number;
    media: InputPaidMedia[];
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendPaidMedia', {
      ...options,
      media: JSON.stringify(options.media),
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendMediaGroup
   * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
   * @see https://core.telegram.org/bots/api#sendmediagroup
   */
  async sendMediaGroup(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    media: (
      | InputMediaAudio
      | InputMediaDocument
      | InputMediaPhoto
      | InputMediaVideo
    )[];
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
  }): Promise<Message[]> {
    return await this.callApi('sendMediaGroup', {
      ...options,
      media: JSON.stringify(options.media),
    });
  }

  /**
   * ## sendLocation
   * Use this method to send point on the map. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendlocation
   */
  async sendLocation(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendLocation', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendVenue
   * Use this method to send information about a venue. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendvenue
   */
  async sendVenue(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendVenue', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendContact
   * Use this method to send phone contacts. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendcontact
   */
  async sendContact(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendContact', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendPoll
   * se this method to send a native poll. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendpoll
   */
  async sendPoll(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    question: string;
    question_parse_mode?: ParseMode;
    question_entities?: MessageEntity[];
    options: InputPollOption[];
    is_anonymous?: boolean;
    type?: 'quiz' | 'regular';
    allows_multiple_answers?: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_parse_mode?: ParseMode;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
    is_closed?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendPoll', {
      ...options,
      options: JSON.stringify(options.options),
      explanation_entities: JSON.stringify(options.explanation_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendDice
   * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#senddice
   */
  async sendDice(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    emoji?: string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendDice', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## sendChatAction
   * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.
   * @see https://core.telegram.org/bots/api#sendchataction
   */
  async sendChatAction(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: number;
    action:
      | 'typing'
      | 'upload_photo'
      | 'record_video'
      | 'upload_video'
      | 'record_voice'
      | 'upload_voice'
      | 'upload_document'
      | 'find_location'
      | 'record_video_note'
      | 'upload_video_note';
  }): Promise<true> {
    return await this.callApi('sendChatAction', options);
  }

  /**
   * ## setMessageReaction
   * Use this method to change the chosen reactions on a message. Service messages can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Returns True on success.
   * @see https://core.telegram.org/bots/api#setmessagereaction
   */
  async setMessageReaction(options: {
    chat_id: number | string;
    message_id: number;
    reaction?: ReactionType[];
    is_big?: boolean;
  }): Promise<true> {
    return await this.callApi('setMessageReaction', {
      ...options,
      reaction: JSON.stringify(options.reaction),
    });
  }

  /**
   * ## getUserProfilePhotos
   * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
   * @see https://core.telegram.org/bots/api#getuserprofilephotos
   */
  async getUserProfilePhotos(options: {
    user_id: number;
    offset?: number;
    limit?: number;
  }): Promise<UserProfilePhotos> {
    return await this.callApi('getUserProfilePhotos', options);
  }

  /**
   * ## getFile
   * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link ```https://api.telegram.org/file/bot<token>/<file_path>```, where ```<file_path>``` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
   * @see https://core.telegram.org/bots/api#getfile
   */
  async getFile(options: { file_id: string }): Promise<TelegramTypes.File> {
    return await this.callApi('getFile', options);
  }

  /**
   * ## banChatMember
   * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#banchatmember
   */
  async banChatMember(options: {
    chat_id: number | string;
    user_id: number;
    until_date?: number;
    revoke_messages?: boolean;
  }): Promise<true> {
    return await this.callApi('banChatMember', options);
  }

  /**
   * ## unbanChatMember
   * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
   * @see https://core.telegram.org/bots/api#unbanchatmember
   */
  async unbanChatMember(options: {
    chat_id: number | string;
    user_id: number;
    only_if_banned?: boolean;
  }): Promise<true> {
    return await this.callApi('unbanChatMember', options);
  }

  /**
   * ## restrictChatMember
   * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
   * @see https://core.telegram.org/bots/api#restrictchatmember
   */
  async restrictChatMember(options: {
    chat_id: number | string;
    user_id: number;
    permissions: ChatPermissions;
    use_independent_chat_permissions?: boolean;
    until_date?: number;
  }): Promise<true> {
    return await this.callApi('restrictChatMember', {
      ...options,
      permissions: JSON.stringify(options.permissions),
    });
  }

  /**
   * ## promoteChatMember
   * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
   * @see https://core.telegram.org/bots/api#promotechatmember
   */
  async promoteChatMember(options: {
    chat_id: number | string;
    user_id: number;
    is_anonymous?: boolean;
    can_manage_chat?: boolean;
    can_delete_messages?: boolean;
    can_manage_video_chats?: boolean;
    can_restrict_members?: boolean;
    can_promote_members?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_post_stories?: boolean;
    can_edit_stories?: boolean;
    can_delete_stories?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
  }): Promise<true> {
    return await this.callApi('promoteChatMember', options);
  }

  /**
   * ## setChatAdministratorCustomTitle
   * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
   * @see https://core.telegram.org/bots/api#setchatadministratorcustomtitle
   */
  async setChatAdministratorCustomTitle(options: {
    chat_id: number | string;
    user_id: number;
    custom_title: string;
  }): Promise<true> {
    return await this.callApi('setChatAdministratorCustomTitle', options);
  }

  /**
   * ## banChatSenderChat
   * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#banchatsenderchat
   */
  async banChatSenderChat(options: {
    chat_id: number | string;
    sender_chat_id: number;
  }): Promise<true> {
    return await this.callApi('banChatSenderChat', options);
  }

  /**
   * ## unbanChatSenderChat
   * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#unbanchatsenderchat
   */
  async unbanChatSenderChat(options: {
    chat_id: number | string;
    sender_chat_id: number;
  }): Promise<true> {
    return await this.callApi('unbanChatSenderChat', options);
  }

  /**
   * ## setChatPermissions
   * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#setchatpermissions
   */
  async setChatPermissions(options: {
    chat_id: number | string;
    permissions: ChatPermissions;
    use_independent_chat_permissions?: boolean;
  }): Promise<true> {
    return await this.callApi('setChatPermissions', {
      ...options,
      permissions: JSON.stringify(options.permissions),
    });
  }

  /**
   * ## exportChatInviteLink
   * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
   * @see https://core.telegram.org/bots/api#exportchatinvitelink
   */
  async exportChatInviteLink(options: {
    chat_id: number | string;
  }): Promise<string> {
    return await this.callApi('exportChatInviteLink', options);
  }

  /**
   * ## createChatInviteLink
   * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
   * @see https://core.telegram.org/bots/api#createchatinvitelink
   */
  async createChatInviteLink(options: {
    chat_id: number | string;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    creates_join_request?: boolean;
  }): Promise<ChatInviteLink> {
    return await this.callApi('createChatInviteLink', options);
  }

  /**
   * ## editChatInviteLink
   * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
   * @see https://core.telegram.org/bots/api#editchatinvitelink
   */
  async editChatInviteLink(options: {
    chat_id: number | string;
    invite_link: string;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    creates_join_request?: boolean;
  }): Promise<ChatInviteLink> {
    return await this.callApi('editChatInviteLink', options);
  }

  /**
   * ## revokeChatInviteLink
   * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
   * @see https://core.telegram.org/bots/api#revokechatinvitelink
   */
  async revokeChatInviteLink(options: {
    chat_id: number | string;
    invite_link: string;
  }): Promise<ChatInviteLink> {
    return await this.callApi('revokeChatInviteLink', options);
  }

  /**
   * ## approveChatJoinRequest
   * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
   * @see https://core.telegram.org/bots/api#approvechatjoinrequest
   */
  async approveChatJoinRequest(options: {
    chat_id: number | string;
    user_id: number;
  }): Promise<true> {
    return await this.callApi('approveChatJoinRequest', options);
  }

  /**
   * ## declineChatJoinRequest
   * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
   * @see https://core.telegram.org/bots/api#declinechatjoinrequest
   */
  async declineChatJoinRequest(options: {
    chat_id: number | string;
    user_id: number;
  }): Promise<true> {
    return await this.callApi('declineChatJoinRequest', options);
  }

  /**
   * ## setChatPhoto
   * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#setchatphoto
   */
  async setChatPhoto(options: {
    chat_id: number | string;
    photo: InputFile;
  }): Promise<true> {
    return await this.callApi('setChatPhoto', options);
  }

  /**
   * ## deleteChatPhoto
   * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#deletechatphoto
   */
  async deleteChatPhoto(options: { chat_id: number | string }): Promise<true> {
    return await this.callApi('deleteChatPhoto', options);
  }

  /**
   * ## setChatTitle
   * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#setchattitle
   */
  async setChatTitle(options: {
    chat_id: number | string;
    title: string;
  }): Promise<true> {
    return await this.callApi('setChatTitle', options);
  }

  /**
   * ## setChatDescription
   * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#setchatdescription
   */
  async setChatDescription(options: {
    chat_id: number | string;
    description?: string;
  }): Promise<true> {
    return await this.callApi('setChatDescription', options);
  }

  /**
   * ## pinChatMessage
   * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the ```'can_pin_messages'``` administrator right in a supergroup or ```'can_edit_messages'``` administrator right in a channel. Returns True on success.
   * @see https://core.telegram.org/bots/api#pinchatmessage
   */
  async pinChatMessage(options: {
    chat_id: number | string;
    message_id: number;
    disable_notification?: boolean;
  }): Promise<true> {
    return await this.callApi('pinChatMessage', options);
  }

  /**
   * ## unpinChatMessage
   * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the ```'can_pin_messages'``` administrator right in a supergroup or ```'can_edit_messages'``` administrator right in a channel. Returns True on success.
   * @see https://core.telegram.org/bots/api#unpinchatmessage
   */
  async unpinChatMessage(options: {
    chat_id: number | string;
    message_id?: number;
  }): Promise<true> {
    return await this.callApi('unpinChatMessage', options);
  }

  /**
   * ## unpinAllChatMessages
   * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the ```'can_pin_messages'``` administrator right in a supergroup or ```'can_edit_messages'``` administrator right in a channel. Returns True on success.
   * @see https://core.telegram.org/bots/api#unpinallchatmessages
   */
  async unpinAllChatMessages(options: {
    chat_id: number | string;
  }): Promise<true> {
    return await this.callApi('unpinAllChatMessages', options);
  }

  /**
   * ## leaveChat
   * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
   * @see https://core.telegram.org/bots/api#leavechat
   */
  async leaveChat(options: { chat_id: number | string }): Promise<true> {
    return await this.callApi('leaveChat', options);
  }

  /**
   * ## getChat
   * Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.
   * @see https://core.telegram.org/bots/api#getchat
   */
  async getChat(options: { chat_id: number | string }): Promise<ChatFullInfo> {
    return await this.callApi('getChat', options);
  }

  /**
   * ## getChatAdministrators
   * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
   * @see https://core.telegram.org/bots/api#getchatadministrators
   */
  async getChatAdministrators(options: {
    chat_id: number | string;
  }): Promise<ChatMember[]> {
    return await this.callApi('getChatAdministrators', options);
  }

  /**
   * ## getChatMemberCount
   * Use this method to get the number of members in a chat. Returns Int on success.
   * @see https://core.telegram.org/bots/api#getchatmembercount
   */
  async getChatMemberCount(options: {
    chat_id: number | string;
  }): Promise<number> {
    return await this.callApi('getChatMemberCount', options);
  }

  /**
   * ## getChatMember
   * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
   * @see https://core.telegram.org/bots/api#getchatmember
   */
  async getChatMember(options: {
    chat_id: number | string;
    user_id: number;
  }): Promise<ChatMember> {
    return await this.callApi('getChatMember', options);
  }

  /**
   * ## setChatStickerSet
   * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
   * @see https://core.telegram.org/bots/api#setchatstickerset
   */
  async setChatStickerSet(options: {
    chat_id: number | string;
    sticker_set_name: string;
  }): Promise<true> {
    return await this.callApi('setChatStickerSet', options);
  }

  /**
   * ## deleteChatStickerSet
   * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
   * @see https://core.telegram.org/bots/api#deletechatstickerset
   */
  async deleteChatStickerSet(options: {
    chat_id: number | string;
  }): Promise<true> {
    return await this.callApi('deleteChatStickerSet', options);
  }

  /**
   * ## getForumTopicIconStickers
   * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
   * @see https://core.telegram.org/bots/api#getforumtopiciconstickers
   */
  async getForumTopicIconStickers(): Promise<Sticker[]> {
    return await this.callApi('getForumTopicIconStickers', {});
  }

  /**
   * ## createForumTopic
   * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
   * @see https://core.telegram.org/bots/api#createforumtopic
   */
  async createForumTopic(options: {
    chat_id: number | string;
    name: string;
    icon_color?: string;
    icon_custom_emoji_id?: string;
  }): Promise<ForumTopic> {
    return await this.callApi('createForumTopic', options);
  }

  /**
   * ## editForumTopic
   * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   * @see https://core.telegram.org/bots/api#editforumtopic
   */
  async editForumTopic(options: {
    chat_id: number | string;
    message_thread_id: number;
    name?: string;
    icon_custom_emoji_id?: string;
  }): Promise<true> {
    return await this.callApi('editForumTopic', options);
  }

  /**
   * ## closeForumTopic
   * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   * @see https://core.telegram.org/bots/api#closeforumtopic
   */
  async closeForumTopic(options: {
    chat_id: number | string;
    message_thread_id: number;
  }): Promise<true> {
    return await this.callApi('closeForumTopic', options);
  }

  /**
   * ## reopenForumTopic
   * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   * @see https://core.telegram.org/bots/api#reopenforumtopic
   */
  async reopenForumTopic(options: {
    chat_id: number | string;
    message_thread_id: number;
  }): Promise<true> {
    return await this.callApi('reopenForumTopic', options);
  }

  /**
   * ## deleteForumTopic
   * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#deleteforumtopic
   */
  async deleteForumTopic(options: {
    chat_id: number | string;
    message_thread_id: number;
  }): Promise<true> {
    return await this.callApi('deleteForumTopic', options);
  }

  /**
   * ## unpinAllForumTopicMessages
   * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
   * @see https://core.telegram.org/bots/api#unpinallforumtopicmessages
   */
  async unpinAllForumTopicMessages(options: {
    chat_id: number | string;
    message_thread_id: number;
  }): Promise<true> {
    return await this.callApi('unpinAllForumTopicMessages', options);
  }

  /**
   * ## editGeneralForumTopic
   * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#editgeneralforumtopic
   */
  async editGeneralForumTopic(options: {
    chat_id: number | string;
    name: string;
  }): Promise<true> {
    return await this.callApi('editGeneralForumTopic', options);
  }

  /**
   * ## closeGeneralForumTopic
   * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the ```can_manage_topics``` administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#closegeneralforumtopic
   */
  async closeGeneralForumTopic(options: {
    chat_id: number | string;
  }): Promise<true> {
    return await this.callApi('closeGeneralForumTopic', options);
  }

  /**
   * ## reopenGeneralForumTopic
   * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
   * @see https://core.telegram.org/bots/api#reopengeneralforumtopic
   */
  async reopenGeneralForumTopic(options: {
    chat_id: number | string;
  }): Promise<true> {
    return await this.callApi('reopenGeneralForumTopic', options);
  }

  /**
   * ## hideGeneralForumTopic
   * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
   * @see https://core.telegram.org/bots/api#hidegeneralforumtopic
   */
  async hideGeneralForumTopic(options: {
    chat_id: number | string;
  }): Promise<true> {
    return await this.callApi('hideGeneralForumTopic', options);
  }

  /**
   * ## unhideGeneralForumTopic
   * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
   * @see https://core.telegram.org/bots/api#unhidegeneralforumtopic
   */
  async unhideGeneralForumTopic(options: {
    chat_id: number | string;
  }): Promise<true> {
    return await this.callApi('unhideGeneralForumTopic', options);
  }

  /**
   * ## unpinAllGeneralForumTopicMessages
   * se this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
   * @see https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages
   */
  async unpinAllGeneralForumTopicMessages(options: {
    chat_id: number | string;
  }): Promise<true> {
    return await this.callApi('unpinAllGeneralForumTopicMessages', options);
  }

  /**
   * ## answerCallbackQuery
   * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
   * @see https://core.telegram.org/bots/api#answercallbackquery
   */
  async answerCallbackQuery(options: {
    callback_query_id: string;
    text?: string;
    show_alert?: boolean;
    url?: string;
    cache_time?: number;
  }): Promise<true> {
    return await this.callApi('answerCallbackQuery', options);
  }

  /**
   * ## getUserChatBoosts
   * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
   * @see https://core.telegram.org/bots/api#getuserchatboosts
   */
  async getUserChatBoosts(options: {
    chat_id: number | string;
    user_id: number;
  }): Promise<ChatBoost[]> {
    return await this.callApi('getUserChatBoosts', options);
  }

  /**
   * ## getBusinessConnection
   * Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.
   * @see https://core.telegram.org/bots/api#getbusinessconnection
   */
  async getBusinessConnection(options: {
    business_connection_id: string;
  }): Promise<BusinessConnection> {
    return await this.callApi('getBusinessConnection', options);
  }

  /**
   * ## setMyCommands
   * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
   * @see https://core.telegram.org/bots/api#setmycommands
   */
  async setMyCommands(options: {
    commands: BotCommand[];
    scope?: BotCommandScope;
    language_code?: string;
  }): Promise<true> {
    return await this.callApi('setMyCommands', {
      commands: JSON.stringify(options.commands),
      scope: JSON.stringify(options.scope),
    });
  }

  /**
   * ## deleteMyCommands
   * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
   * @see https://core.telegram.org/bots/api#deletemycommands
   */
  async deleteMyCommands(options?: {
    scope?: BotCommandScope;
    language_code?: string;
  }): Promise<true> {
    return await this.callApi('deleteMyCommands', {
      scope: JSON.stringify(options?.scope),
    });
  }

  /**
   * ## getMyCommands
   * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
   * @see https://core.telegram.org/bots/api#getmycommands
   */
  async getMyCommands(options?: {
    scope?: BotCommandScope;
    language_code?: string;
  }): Promise<BotCommand[]> {
    return await this.callApi('getMyCommands', {
      scope: JSON.stringify(options?.scope),
    });
  }

  /**
   * ## setMyName
   * Use this method to change the bot's name. Returns True on success.
   * @see https://core.telegram.org/bots/api#setmyname
   */
  async setMyName(options?: {
    name?: string;
    language_code?: string;
  }): Promise<true> {
    return await this.callApi('setMyName', options);
  }

  /**
   * ## getMyName
   * Use this method to get the current bot name for the given user language. Returns BotName on success.
   * @see https://core.telegram.org/bots/api#getmyname
   */
  async getMyName(options?: { language_code?: string }): Promise<BotName> {
    return await this.callApi('getMyName', options);
  }

  /**
   * ## setMyDescription
   * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
   * @see https://core.telegram.org/bots/api#setmydescription
   */
  async setMyDescription(options?: {
    description?: string;
    language_code?: string;
  }): Promise<true> {
    return await this.callApi('setMyDescription', options);
  }

  /**
   * ## getMyDescription
   * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
   * @see https://core.telegram.org/bots/api#getmydescription
   */
  async getMyDescription(options?: {
    language_code?: string;
  }): Promise<BotDescription> {
    return await this.callApi('getMyDescription', options);
  }

  /**
   * ## setMyShortDescription
   * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
   * @see https://core.telegram.org/bots/api#setmyshortdescription
   */
  async setMyShortDescription(options?: {
    short_description?: string;
    language_code?: string;
  }): Promise<true> {
    return await this.callApi('setMyShortDescription', options);
  }

  /**
   * ## getMyShortDescription
   * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
   * @see https://core.telegram.org/bots/api#getmyshortdescription
   */
  async getMyShortDescription(options?: {
    language_code?: string;
  }): Promise<BotShortDescription> {
    return await this.callApi('getMyShortDescription', options);
  }

  /**
   * ## setChatMenuButton
   * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
   * @see https://core.telegram.org/bots/api#setchatmenubutton
   */
  async setChatMenuButton(options: {
    chat_id: number | string;
    menu_button?: MenuButton;
  }): Promise<true> {
    return await this.callApi('setChatMenuButton', {
      ...options,
      menu_button: JSON.stringify(options.menu_button),
    });
  }

  /**
   * ## getChatMenuButton
   * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
   * @see https://core.telegram.org/bots/api#getchatmenubutton
   */
  async getChatMenuButton(options: {
    chat_id: number | string;
  }): Promise<MenuButton> {
    return await this.callApi('getChatMenuButton', options);
  }

  /**
   * ## setMyDefaultAdministratorRights
   * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
   * @see https://core.telegram.org/bots/api#setmydefaultadministratorrights
   */
  async setMyDefaultAdministratorRights(options: {
    rights: ChatAdministratorRights;
    for_channels?: boolean;
  }): Promise<true> {
    return await this.callApi('setMyDefaultAdministratorRights', {
      rights: JSON.stringify(options.rights),
    });
  }

  /**
   * ## getMyDefaultAdministratorRights
   * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
   * @see https://core.telegram.org/bots/api#getmydefaultadministratorrights
   */
  async getMyDefaultAdministratorRights(options?: {
    for_channels?: boolean;
  }): Promise<ChatAdministratorRights> {
    return await this.callApi('getMyDefaultAdministratorRights', options);
  }

  /**
   * ## editMessageText
   * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see https://core.telegram.org/bots/api#editmessagetext
   */
  async editMessageText(
    options: (
      | { chat_id: number | string; message_id: number }
      | { inline_message_id: string }
    ) & {
      business_connection_id?: string;
      text: string;
      parse_mode?: ParseMode;
      entities?: MessageEntity[];
      link_preview_options?: LinkPreviewOptions;
      reply_markup?: InlineKeyboardMarkup;
    },
  ): Promise<Message | true> {
    return await this.callApi('editMessageText', {
      ...options,
      entities: JSON.stringify(options.entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## editMessageCaption
   * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see https://core.telegram.org/bots/api#editmessagecaption
   */
  async editMessageCaption(
    options: (
      | { chat_id: number | string; message_id: number }
      | { inline_message_id: string }
    ) & {
      business_connection_id?: string;
      caption?: string;
      parse_mode?: ParseMode;
      caption_entities?: MessageEntity[];
      show_caption_above_media?: boolean;
      reply_markup?: InlineKeyboardMarkup;
    },
  ): Promise<Message | true> {
    return await this.callApi('editMessageCaption', {
      ...options,
      caption_entities: JSON.stringify(options.caption_entities),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## editMessageMedia
   * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see https://core.telegram.org/bots/api#editmessagemedia
   */
  async editMessageMedia(
    options: (
      | { chat_id: number; message_id: number }
      | { inline_message_id: string }
    ) & {
      business_connection_id?: string;
      media: InputMedia;
      reply_markup?: InlineKeyboardMarkup;
    },
  ): Promise<Message | true> {
    return await this.callApi('editMessageMedia', {
      ...options,
      media: JSON.stringify(options.media),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## editMessageLiveLocation
   * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see https://core.telegram.org/bots/api#editmessagelivelocation
   */
  async editMessageLiveLocation(
    options: (
      | { chat_id: number | string; message_id: number }
      | { inline_message_id: string }
    ) & {
      business_connection_id?: string;
      latitude: number;
      longitude: number;
      live_period?: number;
      horizontal_accuracy?: number;
      heading?: number;
      proximity_alert_radius?: number;
      reply_markup?: InlineKeyboardMarkup;
    },
  ): Promise<Message | true> {
    return await this.callApi('editMessageLiveLocation', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## stopMessageLiveLocation
   * se this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see https://core.telegram.org/bots/api#stopmessagelivelocation
   */
  async stopMessageLiveLocation(
    options: (
      | { chat_id: number | string; message_id: number }
      | { inline_message_id: string }
    ) & {
      business_connection_id?: string;
      reply_markup?: InlineKeyboardMarkup;
    },
  ): Promise<Message | true> {
    return await this.callApi('stopMessageLiveLocation', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## editMessageReplyMarkup
   * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see https://core.telegram.org/bots/api#editmessagereplymarkup
   */
  async editMessageReplyMarkup(
    options: (
      | { chat_id: number | string; message_id: number }
      | { inline_message_id: string }
    ) & {
      business_connection_id?: string;
      reply_markup?: InlineKeyboardMarkup;
    },
  ): Promise<Message | true> {
    return await this.callApi('editMessageReplyMarkup', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## stopPoll
   * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
   * @see https://core.telegram.org/bots/api#stoppoll
   */
  async stopPoll(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_id: number;
    reply_markup?: InlineKeyboardMarkup;
  }): Promise<Poll> {
    return await this.callApi('stopPoll', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## deleteMessage
   * Use this method to delete a message, including service messages, with the following limitations:
   * - A message can only be deleted if it was sent less than 48 hours ago.
   * - Service messages about a supergroup, channel, or forum topic creation can't be deleted.
   * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
   * - Bots can delete outgoing messages in private chats, groups, and supergroups.
   * - Bots can delete incoming messages in private chats.
   * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
   * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
   * Returns True on success.
   * @see https://core.telegram.org/bots/api#deletemessage
   */
  async deleteMessage(options: {
    chat_id: number | string;
    message_id: number;
  }): Promise<true> {
    return await this.callApi('deleteMessage', options);
  }

  /**
   * ## deleteMessages
   * Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.
   * @see https://core.telegram.org/bots/api#deletemessages
   */
  async deleteMessages(options: {
    chat_id: number | string;
    message_ids: number[];
  }): Promise<true> {
    return await this.callApi('deleteMessages', {
      ...options,
      message_ids: JSON.stringify(options.message_ids),
    });
  }

  /**
   * ## sendSticker
   * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendsticker
   */
  async sendSticker(options: {
    business_connection_id?: string;
    chat_id: number | string;
    message_thread_id?: string;
    sticker: InputFile | string;
    emoji?: string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  }): Promise<Message> {
    return await this.callApi('sendSticker', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## getStickerSet
   * Use this method to get a sticker set. On success, a StickerSet object is returned.
   * @see https://core.telegram.org/bots/api#getstickerset
   */
  async getStickerSet(options: { name: string }): Promise<StickerSet> {
    return await this.callApi('getStickerSet', options);
  }

  /**
   * ## getCustomEmojiStickers
   * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
   * @see https://core.telegram.org/bots/api#getcustomemojistickers
   */
  async getCustomEmojiStickers(options: {
    custom_emoji_ids: string[];
  }): Promise<Sticker[]> {
    return await this.callApi('getCustomEmojiStickers', {
      custom_emoji_ids: JSON.stringify(options.custom_emoji_ids),
    });
  }

  /**
   * ## uploadStickerFile
   * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.
   * @see https://core.telegram.org/bots/api#uploadstickerfile
   */
  async uploadStickerFile(options: {
    user_id: number;
    sticker: InputFile;
    sticker_format?: InputSticker['format'];
  }): Promise<TelegramTypes.File> {
    return await this.callApi('uploadStickerFile', options);
  }

  /**
   * ## createNewStickerSet
   * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
   * @see https://core.telegram.org/bots/api#createnewstickerset
   */
  async createNewStickerSet(options: {
    user_id: number;
    name: string;
    title: string;
    stickers: InputSticker[];
    sticker_type?: Sticker['type'];
    needs_repainting?: boolean;
  }): Promise<true> {
    return await this.callApi('createNewStickerSet', {
      ...options,
      stickers: JSON.stringify(options.stickers),
    });
  }

  /**
   * ## addStickerToSet
   * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
   * @see https://core.telegram.org/bots/api#addstickertoset
   */
  async addStickerToSet(options: {
    user_id: number;
    name: string;
    sticker: InputSticker;
  }): Promise<true> {
    return await this.callApi('addStickerToSet', {
      ...options,
      sticker: JSON.stringify(options.sticker),
    });
  }

  /**
   * ## setStickerPositionInSet
   * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
   * @see https://core.telegram.org/bots/api#setstickerpositioninset
   */
  async setStickerPositionInSet(options: {
    sticker: string;
    position: number;
  }): Promise<true> {
    return await this.callApi('setStickerPositionInSet', options);
  }

  /**
   * ## deleteStickerFromSet
   * Use this method to delete a sticker from a set created by the bot. Returns True on success.
   * @see https://core.telegram.org/bots/api#deletestickerfromset
   */
  async deleteStickerFromSet(options: { sticker: string }): Promise<true> {
    return await this.callApi('deleteStickerFromSet', options);
  }

  /**
   * ## replaceStickerInSet
   * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
   * @see https://core.telegram.org/bots/api#replacestickerinset
   */
  async replaceStickerInSet(options: {
    user_id: number;
    name: string;
    old_sticker: string;
    sticker: InputSticker;
  }): Promise<true> {
    return await this.callApi('replaceStickerInSet', {
      ...options,
      new_sticker: JSON.stringify(options.sticker),
    });
  }

  /**
   * ## setStickerEmojiList
   * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
   * @see https://core.telegram.org/bots/api#setstickeremojilist
   */
  async setStickerEmojiList(options: {
    sticker: string;
    emoji_list: string[];
  }): Promise<true> {
    return await this.callApi('setStickerEmojiList', {
      ...options,
      emojis: JSON.stringify(options.emoji_list),
    });
  }

  /**
   * ## setStickerKeywords
   * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
   * @see https://core.telegram.org/bots/api#setstickerkeywords
   */
  async setStickerKeywords(options: {
    sticker: string;
    keywords: string[];
  }): Promise<true> {
    return await this.callApi('setStickerKeywords', {
      ...options,
      keywords: JSON.stringify(options.keywords),
    });
  }

  /**
   * ## setStickerMaskPosition
   * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
   * @see https://core.telegram.org/bots/api#setstickermaskposition
   */
  async setStickerMaskPosition(options: {
    sticker: string;
    mask_position: MaskPosition;
  }): Promise<true> {
    return await this.callApi('setStickerMaskPosition', {
      ...options,
      mask_position: JSON.stringify(options.mask_position),
    });
  }

  /**
   * ## setStickerSetTitle
   * Use this method to set the title of a created sticker set. Returns True on success.
   * @see https://core.telegram.org/bots/api#setstickersettitle
   */
  async setStickerSetTitle(options: {
    name: string;
    title: string;
  }): Promise<true> {
    return await this.callApi('setStickerSetTitle', options);
  }

  /**
   * ## setStickerSetThumbnail
   * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
   * @see https://core.telegram.org/bots/api#setstickersettitle
   */
  async setStickerSetThumbnail(options: {
    name: string;
    user_id: number;
    thumbnail?: InputFile | string;
    format?: InputSticker['format'];
  }): Promise<true> {
    return await this.callApi('setStickerSetThumbnail', options);
  }

  /**
   * ## setCustomEmojiStickerSetThumbnail
   * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
   * @see https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail
   */
  async setCustomEmojiStickerSetThumbnail(options: {
    name: string;
    custom_emoji_id?: string;
  }): Promise<true> {
    return await this.callApi('setCustomEmojiStickerSetThumbnail', options);
  }

  /**
   * ## deleteStickerSet
   * Use this method to delete a sticker set that was created by the bot. Returns True on success.
   * @see https://core.telegram.org/bots/api#deletestickerset
   */
  async deleteStickerSet(options: { name: string }): Promise<true> {
    return await this.callApi('deleteStickerSet', options);
  }

  /**
   * ## answerInlineQuery
   * Use this method to send answers to an inline query. On success, True is returned.
   * No more than 50 results per query are allowed.
   * @see https://core.telegram.org/bots/api#answerinlinequery
   */
  async answerInlineQuery(options: {
    inline_query_id: string;
    results: InlineQueryResult[];
    cache_time?: number;
    is_personal?: boolean;
    next_offset?: string;
    button?: InlineQueryResultsButton;
  }): Promise<true> {
    return await this.callApi('answerInlineQuery', {
      ...options,
      results: JSON.stringify(options.results),
      button: JSON.stringify(options.button),
    });
  }

  /**
   * ## answerWebAppQuery
   * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
   * @see https://core.telegram.org/bots/api#answerwebappquery
   */
  async answerWebAppQuery(options: {
    web_app_query_id: string;
    result: InlineQueryResult;
  }): Promise<SentWebAppMessage> {
    return await this.callApi('answerWebAppQuery', {
      ...options,
      result: JSON.stringify(options.result),
    });
  }

  /**
   * ## sendInvoice
   * Use this method to send invoices. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendinvoice
   */
  async sendInvoice<T extends Currencies | 'XTR'>(options: {
    chat_id: number | string;
    message_thread_id?: number;
    title: string;
    description: string;
    payload: string;
    provider_token?: T extends 'XTR' ? never : string;
    currency: T;
    prices: T extends 'XTR' ? [LabeledPrice] : LabeledPrice[];
    max_tip_amount?: T extends 'XTR' ? never : number;
    suggested_tip_amounts?: number[];
    start_parameter: string;
    provider_data?: string;
    photo_url?: string;
    photo_size?: number;
    photo_width?: number;
    photo_height?: number;
    need_name?: T extends 'XTR' ? never : boolean;
    need_phone_number?: T extends 'XTR' ? never : boolean;
    need_email?: T extends 'XTR' ? never : boolean;
    need_shipping_address?: T extends 'XTR' ? never : boolean;
    send_phone_number_to_provider?: T extends 'XTR' ? never : boolean;
    send_email_to_provider?: T extends 'XTR' ? never : boolean;
    is_flexible?: T extends 'XTR' ? never : boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?: InlineKeyboardMarkup;
  }): Promise<Message> {
    return await this.callApi('sendInvoice', {
      ...options,
      prices: JSON.stringify(options.prices),
      suggested_tip_amounts: JSON.stringify(options.suggested_tip_amounts),
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## createInvoiceLink
   * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
   * @see https://core.telegram.org/bots/api#createinvoicelink
   */
  async createInvoiceLink<T extends Currencies | 'XTR'>(options: {
    title: string;
    description: string;
    payload: string;
    provider_token?: string;
    currency: T;
    prices: T extends 'XTR' ? [LabeledPrice] : LabeledPrice[];
    max_tip_amount?: T extends 'XTR' ? never : number;
    suggested_tip_amounts?: number[];
    provider_data?: string;
    photo_url?: string;
    photo_size?: number;
    photo_width?: number;
    photo_height?: number;
    need_name?: T extends 'XTR' ? never : boolean;
    need_phone_number?: T extends 'XTR' ? never : boolean;
    need_email?: T extends 'XTR' ? never : boolean;
    need_shipping_address?: T extends 'XTR' ? never : boolean;
    send_phone_number_to_provider?: T extends 'XTR' ? never : boolean;
    send_email_to_provider?: T extends 'XTR' ? never : boolean;
    is_flexible?: T extends 'XTR' ? never : boolean;
  }): Promise<string> {
    return await this.callApi('createInvoiceLink', {
      ...options,
      prices: JSON.stringify(options.prices),
      suggested_tip_amounts: JSON.stringify(options.suggested_tip_amounts),
    });
  }

  /**
   * ## answerShippingQuery
   * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
   * @see https://core.telegram.org/bots/api#answershippingquery
   */
  async answerShippingQuery(
    options:
      | {
          shipping_query_id: string;
          ok: true;
          shipping_options: ShippingOption[];
        }
      | {
          shipping_query_id: string;
          ok: false;
          error_message: string;
        },
  ): Promise<true> {
    return await this.callApi('answerShippingQuery', {
      ...options,
      shipping_options:
        'shipping_options' in options
          ? JSON.stringify(options.shipping_options)
          : undefined,
    });
  }

  /**
   * ## answerPreCheckoutQuery
   * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
   * @see https://core.telegram.org/bots/api#answerprecheckoutquery
   */
  async answerPreCheckoutQuery(
    options: {
      pre_checkout_query_id: string;
    } & (
      | { ok: true; error_message?: never }
      | { ok: false; error_message: string }
    ),
  ): Promise<true> {
    return await this.callApi('answerPreCheckoutQuery', options);
  }

  /**
   * ## getStarTransactions
   * Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.
   * @see https://core.telegram.org/bots/api#getstartransactions
   */
  async getStarTransactions(options?: {
    offset?: number;
    limit?: number;
  }): Promise<StarTransactions> {
    return await this.callApi('getStarTransactions', options);
  }

  /**
   * ## refundStarPayment
   * Refunds a successful payment in Telegram Stars. Returns True on success.
   * @see https://core.telegram.org/bots/api#refundstarpayment
   */
  async refundStarPayment(options: {
    user_id: number;
    telegram_payment_charge_id: string;
  }): Promise<true> {
    return await this.callApi('refundStarPayment', options);
  }

  /**
   * ## setPassportDataErrors
   * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
   * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
   * @see https://core.telegram.org/bots/api#setpassportdataerrors
   */
  async setPassportDataErrors(options: {
    user_id: number;
    errors: PassportElementError[];
  }): Promise<true> {
    return await this.callApi('setPassportDataErrors', {
      ...options,
      errors: JSON.stringify(options.errors),
    });
  }

  /**
   * ## sendGame
   * Use this method to send a game. On success, the sent Message is returned.
   * @see https://core.telegram.org/bots/api#sendgame
   */
  async sendGame(options: {
    business_connection_id?: string;
    chat_id: number;
    message_thread_id?: number;
    game_short_name: string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup: InlineKeyboardMarkup;
  }): Promise<Message> {
    return await this.callApi('sendGame', {
      ...options,
      reply_markup: JSON.stringify(options.reply_markup),
    });
  }

  /**
   * ## setGameScore
   * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the [Message](https://core.telegram.org/bots/api#message) is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
   * @see https://core.telegram.org/bots/api#setgamescore
   */
  async setGameScore(
    options: (
      | { chat_id: number; message_id: number }
      | { inline_message_id: string }
    ) & {
      user_id: number;
      score: number;
      force?: boolean;
      disable_edit_message?: boolean;
    },
  ): Promise<Message | true> {
    return await this.callApi('setGameScore', options);
  }

  /**
   * ## getGameHighScores
   * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
   * > This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.
   * @see https://core.telegram.org/bots/api#getgamehighscores
   */
  async getGameHighScores(
    options: (
      | { chat_id: number; message_id: number }
      | { inline_message_id: string }
    ) & {
      user_id: number;
    },
  ): Promise<GameHighScore[]> {
    return await this.callApi('getGameHighScores', options);
  }

  on<U extends keyof allEmittedTypes>(
    event: U,
    listener: (eventData: NonNullable<allEmittedTypes[U]>) => void,
  ): this {
    return super.on(event, listener) as this;
  }

  emit<U extends keyof allEmittedTypes>(
    event: U,
    eventData: NonNullable<allEmittedTypes[U]>,
  ): boolean {
    return super.emit(event, eventData);
  }
}
