import NHentaiAPI from '..';
import parse from './parser';

export default class TagAPI {
  constructor(private api: NHentaiAPI) { }

  private async _tags(name: string, page = 0) {
    return parse(await this.api.cheerio(`/${name}/?page=${page + 1}`));
  }
  characters(page = 0) { return this._tags('characters', page); }
  tags(page = 0) { return this._tags('tags', page); }
  artists(page = 0) { return this._tags('artists', page); }
  parodies(page = 0) { return this._tags('parodies', page); }
  groups(page = 0) { return this._tags('groups', page); }
}
