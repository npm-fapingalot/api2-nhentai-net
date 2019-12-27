import NHentaiAPI from '..';

const api = (new NHentaiAPI()).manga;

describe('#getManga', () => {
  test('Compatibility', async () => {
    const manga = await api.id(294567);

    expect(manga).toBeDefined();
    expect(manga).toHaveProperty('id', 294567);
    expect(manga).toHaveProperty('title', '[HaraPan Power (Sakura Nobita)] Chloe Seiibutsu-ka Program (Fate/kaleid liner Prisma Illya)');
    expect(manga.content).toHaveLength(18);
  }, 20000000);
});
