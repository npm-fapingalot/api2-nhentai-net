import NHentaiAPI from '..';
import { toInt, regexExtract, isDefined } from '../parse.utils';
import parse from './parser';
import { ID } from './schema';

export const HREF_REGEX = /\/?(g|gallery)\/(\d+)\/?/i

export default class MangaAPI {
  constructor(private api: NHentaiAPI) { }

  async id(id: ID) { return parse(await this.api.cheerio(`/g/${id}/`), id); }

  hrefToID(href: string): ID | null {
    if (!href.startsWith('/') && !href.startsWith(this.api.baseURL + '/')) { return null; }
    return toInt(regexExtract(href, HREF_REGEX, 2))
  }

  isValidHref(href: string): boolean {
    return isDefined(this.hrefToID(href));
  }
}

export * from './schema';
