# 📦 typescript-telegram-bot-api
[![CI](https://github.com/Borodin/typescript-telegram-bot-api/actions/workflows/ci.yml/badge.svg)](https://github.com/Borodin/typescript-telegram-bot-api/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/typescript-telegram-bot-api)](https://www.npmjs.com/package/typescript-telegram-bot-api)
[![npm](https://img.shields.io/npm/dt/typescript-telegram-bot-api)](https://www.npmjs.com/package/typescript-telegram-bot-api)
[![codecov](https://codecov.io/github/Borodin/typescript-telegram-bot-api/graph/badge.svg?token=509N5AZDTV)](https://codecov.io/github/Borodin/typescript-telegram-bot-api)
[![GitHub](https://img.shields.io/badge/Bot_API-v7.7-0088cc)](https://core.telegram.org/bots/api#july-7-2024)


This is a TypeScript wrapper for the [Telegram Bot API](https://core.telegram.org/bots/api) or Node.js and browsers. It allows you to easily interact with the Telegram Bot API using TypeScript.
Check out the browser live demo here: [StarExplorer](https://borodin.github.io/StarExplorer/).

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

// or in browser

await bot.sendPhoto({
  chat_id: chat_id,
  photo: input.files[0],
  caption: 'file',
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

## Webhooks
To use webhooks, you need to set up a server that will receive updates from Telegram. You can use the [express](https://www.npmjs.com/package/express) library for this purpose.

This example demonstrates a basic Telegram bot that responds with a reaction to any incoming message using Webhooks. The use of [ngrok](https://www.npmjs.com/package/ngrok) as a tunneling service simplifies the setup, allowing the bot to be easily deployed in various environments without complex network configuration. This approach is ideal for quick testing and development purposes. For production use, you should consider deploying the bot on a server with a public IP address and a valid SSL certificate.
```typescript
import 'dotenv/config';
import * as ngrok from 'ngrok';
import express from "express";
import {TelegramBot} from "./src";
import {Update} from "./src/types";

const port = 3001;

const bot = new TelegramBot({
  botToken: process.env.TEST_TELEGRAM_TOKEN as string,
});

bot.on('message', async (message) => {
  await bot.setMessageReaction({
    chat_id: message.chat.id,
    message_id: message.message_id,
    reaction: [{
      type: 'emoji', emoji: '👍'
    }]
  });
});

const app = express();
app.use(express.json());
app.post('/', async (req, res) => {
  try {
    await bot.processUpdate(req.body as Update);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

(async () => {
  app.listen(port, async () => {
    const url = await ngrok.connect({
      proto: 'http',
      addr: port,
    });
    await bot.setWebhook({url});
    console.log('Set Webhook to', url);
  })
})();

process.on('SIGINT', async () => {
  await bot.deleteWebhook();
  await ngrok.disconnect();
  console.log('Webhook deleted');
});
```


## Tests
```bash
npm test
```
CI/CD is set up with GitHub Actions. Tests and linters are run on every pull request.

If you want to run tests locally, follow the instructions in [tests/README.md](tests/).