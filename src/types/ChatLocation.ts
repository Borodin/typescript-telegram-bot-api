/**
 * ## ChatLocation
 * Represents a location to which a chat is connected.
 * @see https://core.telegram.org/bots/api#chatlocation
 */
export type ChatLocation = {
  location: Location;
  address: string;
};
