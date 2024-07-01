# 📦 typescript-telegram-bot-api
[![CI](https://github.com/Borodin/typescript-telegram-bot-api/actions/workflows/ci.yml/badge.svg)](https://github.com/Borodin/typescript-telegram-bot-api/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/typescript-telegram-bot-api)](https://www.npmjs.com/package/typescript-telegram-bot-api)
[![npm](https://img.shields.io/npm/dt/typescript-telegram-bot-api)](https://www.npmjs.com/package/typescript-telegram-bot-api)
[![GitHub](https://img.shields.io/badge/Bot_API-v7.5-0088cc)](https://core.telegram.org/bots/api#recent-changes)
[![codecov](https://codecov.io/github/Borodin/typescript-telegram-bot-api/graph/badge.svg?token=509N5AZDTV)](https://codecov.io/github/Borodin/typescript-telegram-bot-api)


This is a TypeScript wrapper for the [Telegram Bot API](https://core.telegram.org/bots/api). It allows you to easily interact with the Telegram Bot API using TypeScript.

## Installation

```bash
npm install typescript-telegram-bot-api
```
## Usage

```typescript
import { TelegramBot } from 'typescript-telegram-bot-api';

const bot = new TelegramBot({ botToken: 'YOUR_BOT_TOKEN' });
bot.startPolling();

bot.on('message', (message) => {
  console.log('Received message:', message.text);
});

bot.on('message:sticker', (message) => {
  console.log('Received sticker:', message.sticker.emoji);
});

api.getMe()
  .then(console.log)
  .catch(console.error);
```

## Supported Methods
Descriptions of methods can be found at https://core.telegram.org/bots/api#available-methods.
Method names and parameters correspond to those in the official API documentation.
Each method returns a Promise that resolves with data received from the API.

In case of an API error, the Promise will be rejected with a `TelegramError` containing the error code and description from the API.
If the API error includes a `retry_after` field, the library will retry the request after the specified number of seconds, until a response without an error is received. This behavior can be disabled by setting the `autoRetry` parameter to `false`.

If the error is not related to the API, the Promise will be rejected with a different error.

For sending files, you can use not only ```'file_id'``` or ```'url'```, but also ```stream.Readable``` or ```Buffer```.
```typescript
import {createReadStream} from 'fs';
import {readFile} from 'fs/promises';


await bot.sendPhoto({
  chat_id: chat_id,
  photo: 'AgACAgIAAxkDAAIF62Zq43...AgADcwADNQQ',
  caption: 'file_id',
});

// or

await bot.sendPhoto({
  chat_id: chat_id,
  photo: 'https://unsplash.it/640/480',
  caption: 'url',
});

// or

await bot.sendPhoto({
  chat_id: chat_id,
  photo: createReadStream('photo.jpg'),
  caption: 'stream',
});

// or 

await bot.sendPhoto({
  chat_id: chat_id,
  photo: await readFile('photo.jpg'),
  caption: 'buffer',
});
```
## Events
TelegramBot is an EventEmitter that emits the [Update](https://core.telegram.org/bots/api#update) event and also emits events for each type of [Message](https://core.telegram.org/bots/api#message), such as `message:audio`, when the `audio` field is present in the message object.
```typescript
bot.on('message', (message) => {
  console.log('Received message:', message.text);
});

bot.on('message_reaction', (messageReactionUpdated) => {
  console.log('Received message_reaction:', messageReactionUpdated);
});

bot.on('message:audio', (message) => {
  console.log('Received audio:', message.audio.file_id);
});
```


## Tests
```bash
npm test
```
CI/CD is set up with GitHub Actions. Tests and linters are run on every pull request.

If you want to run tests locally, follow the instructions in [tests/README.md](tests/).