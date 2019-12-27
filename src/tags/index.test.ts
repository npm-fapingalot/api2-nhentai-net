import NHentaiAPI from '..';

const api = (new NHentaiAPI()).tags;

describe('#artists', () => {
  test('Compatibility', async () => {
    const manga = await api.artists();

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(120);
  }, 2000000);
});

describe('#groups', () => {
  test('Compatibility', async () => {
    const manga = await api.groups();

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(120);
  }, 2000000);
});

describe('#characters', () => {
  test('Compatibility', async () => {
    const manga = await api.characters();

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(120);
  }, 2000000);
});

describe('#parodies', () => {
  test('Compatibility', async () => {
    const manga = await api.parodies();

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(120);
  }, 2000000);
});

describe('#tags', () => {
  test('Compatibility', async () => {
    const manga = await api.tags();

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(120);
  }, 2000000);
});
