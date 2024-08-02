/**
 * ## WriteAccessAllowed
 * This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
 * @see https://core.telegram.org/bots/api#writeaccessallowed
 */
export interface WriteAccessAllowed {
  from_request?: boolean;
  web_app_name?: string;
  from_attachment_menu?: boolean;
}
