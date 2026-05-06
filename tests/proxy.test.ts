import 'dotenv/config';
import { TelegramBot } from '../src';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { SocksProxyAgent } from 'socks-proxy-agent';

const TOKEN = process.env.TEST_TELEGRAM_TOKEN as string;
const HTTP_PROXY = process.env.TEST_HTTP_PROXY;
const SOCKS5_PROXY = process.env.TEST_SOCKS5_PROXY;

describe('proxy support', () => {
  const testHttp = HTTP_PROXY ? test : test.skip;
  const testSocks = SOCKS5_PROXY ? test : test.skip;

  testHttp('should call getMe() via HTTP proxy', async () => {
    const bot = new TelegramBot({
      botToken: TOKEN,
      agent: new HttpsProxyAgent(HTTP_PROXY!),
    });
    const me = await bot.getMe();
    expect(me.is_bot).toBe(true);
  });

  testSocks('should call getMe() via SOCKS5 proxy', async () => {
    const bot = new TelegramBot({
      botToken: TOKEN,
      agent: new SocksProxyAgent(SOCKS5_PROXY!),
    });
    const me = await bot.getMe();
    expect(me.is_bot).toBe(true);
  });
});
