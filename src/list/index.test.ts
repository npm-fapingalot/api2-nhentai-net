import NHentaiAPI from '..';

const api = (new NHentaiAPI()).list;

describe('#home', () => {
  test('Compatibility', async () => {
    const manga = await api.home();

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(25);
  }, 2000000);
});

describe('#search', () => {
  test('Compatibility', async () => {
    const manga = await api.search('lolicon');

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(25);
  }, 2000000);
});

describe('#artist', () => {
  test('Compatibility', async () => {
    const manga = await api.artist('78rr');

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(25);
  }, 2000000);
});

describe('#group', () => {
  test('Compatibility', async () => {
    const manga = await api.group('100yenmofa');

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(25);
  }, 2000000);
});

describe('#character', () => {
  test('Compatibility', async () => {
    const manga = await api.character('neko-musume');

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(25);
  }, 2000000);
});

describe('#parody', () => {
  test('Compatibility', async () => {
    const manga = await api.parody('gegege-no-kitarou');

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(25);
  }, 2000000);
});

describe('#tag', () => {
  test('Compatibility', async () => {
    const manga = await api.tag('lolicon');

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(25);
  }, 2000000);
});
