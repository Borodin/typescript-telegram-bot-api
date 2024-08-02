/**
 * ## getWebhookInfo
 * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If
 * the bot is using getUpdates, will return an object with the url field empty.
 * @see https://core.telegram.org/bots/api#getwebhookinfo
 */
export type WebhookInfo = {
  /**
   * Webhook URL, may be empty if webhook is not set up
   */
  url: string;

  /**
   * True, if a custom certificate was provided for webhook certificate checks
   */
  has_custom_certificate: boolean;

  /**
   * Number of updates awaiting delivery
   */
  pending_update_count: number;

  /**
   * Optional. Currently used webhook IP address
   */
  ip_address?: string;

  /**
   * Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_date?: number;

  /**
   * Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an
   * update via webhook
   */
  last_error_message?: string;

  /**
   * Optional. Unix time of the most recent error that happened when trying to synchronize available updates with
   * Telegram datacenters
   */
  last_synchronization_error_date?: number;

  /**
   * Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
   */
  max_connections?: string;

  /**
   * Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member
   */
  allowed_updates?: string[];
};
