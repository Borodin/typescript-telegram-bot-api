export type KeyboardButtonRequestUsers = {
  request_id: number;
  user_is_bot?: boolean;
  user_is_premium?: boolean;
  max_quantity?: number;
  request_name?: string;
  request_username?: string;
  request_photo?: string;
};
