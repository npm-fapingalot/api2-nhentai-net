import MangaAPI from './manga';
import fetch, { ResponseInit } from 'node-fetch';
import cheerio from 'cheerio';
import ListAPI from './list';
import TagAPI from './tags';

export default class NHentaiAPI {
  public readonly manga = new MangaAPI(this);
  public readonly list = new ListAPI(this);
  public readonly tags = new TagAPI(this);


  constructor(public readonly baseURL = 'https://nhentai.net/') {
    this.baseURL = baseURL.replace(/\/$/, '');
  }


  // Helper functions
  public async html(href: string, options?: ResponseInit) {
    return await (await fetch(this.baseURL + href, options)).text();
  }
  public async cheerio(href: string, options?: ResponseInit) {
    return cheerio.load(await this.html(href, options));
  }
}
