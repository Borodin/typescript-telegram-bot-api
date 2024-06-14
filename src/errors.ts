import { ErrorResponse } from './types';

export class TelegramError extends Error {
  response: ErrorResponse;

  constructor(response: ErrorResponse) {
    super(`${response.error_code} ${response.description}`);
    this.name = 'TelegramError';
    this.response = response;
  }
}
