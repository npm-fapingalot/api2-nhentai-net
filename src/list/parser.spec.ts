import { getID } from './parser';

describe('#getID', () => {
  test('Working', () => {
    const $ = { find: ((selector: string) => ({ attr: (attr: string) => '/gallery/12345/' })) } as Cheerio;
    expect(getID($)).toBe(12345);
  });
});
