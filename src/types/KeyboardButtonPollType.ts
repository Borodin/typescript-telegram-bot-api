/**
 * ## KeyboardButtonPollType
 * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 * @see https://core.telegram.org/bots/api#keyboardbuttonpolltype
 */
export type KeyboardButtonPollType = {
  type: 'quiz' | 'regular';
};
