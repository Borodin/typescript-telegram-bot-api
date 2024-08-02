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
bot.on('business_connection', async (connection) => {
  console.log(connection);//'fjS_i5i7UEm7BwAAlTr1ejWYWfs'
})
