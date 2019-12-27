import NHentaiAPI from '..';
import parse from './parser';

export default class ListAPI {
  constructor(private api: NHentaiAPI) { }

  async home(page = 0) { return parse(await this.api.cheerio(`/?page=${page + 1}`)); }
  async search(query: string, page = 0) { return parse(await this.api.cheerio(`/search/?page=${page + 1}&q=${query}`)); }

  private async _tags(name: string, query: string, page = 0) {
    return parse(await this.api.cheerio(`/${name}/${query}/?page=${page + 1}`));
  }
  character(character: string, page = 0) { return this._tags('character', character, page); }
  tag(tag: string, page = 0) { return this._tags('tag', tag, page); }
  artist(artist: string, page = 0) { return this._tags('artist', artist, page); }
  parody(parody: string, page = 0) { return this._tags('parody', parody, page); }
  group(group: string, page = 0) { return this._tags('group', group, page); }
}

export * from './schema';
