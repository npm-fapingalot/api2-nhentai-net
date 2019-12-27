import NHentaiAPI from '..';

const api = (new NHentaiAPI()).manga;

describe('#hrefToID', () => {
  test('Working', async () => {
    expect(api.hrefToID('https://nhentai.org/g/295063/')).toBe(null);

    expect(api.hrefToID('https://nhentai.net/g/295063/')).toBe(295063);
    expect(api.hrefToID('/g/295063/')).toBe(295063);
  }, 20000000);
});

describe('#isValidHref', () => {
  test('Working', async () => {
    expect(api.isValidHref('https://nhentai.org/g/295063/')).toBe(false);

    expect(api.isValidHref('https://nhentai.net/g/295063/')).toBe(true);
    expect(api.isValidHref('/g/295063/')).toBe(true);
  }, 20000000);
});
