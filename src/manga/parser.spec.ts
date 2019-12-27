import { getTags, getPageCount, getFavoriteCount, getPages } from './parser';

describe('#getPageCount', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => '123 pages' })) as CheerioStatic;
    expect(getPageCount($)).toBe(123);
  });
});

describe('#getFavoriteCount', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => 'Favorite (123)' })) as CheerioStatic;
    expect(getFavoriteCount($)).toBe(123);
  });
});

describe('#getPages', () => {
  test('Working', () => { });
});

describe('#getTags', () => {
  test('Working', () => { });
});
