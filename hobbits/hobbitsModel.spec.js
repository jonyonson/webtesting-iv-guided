const db = require('../data/dbConfig');

const { insert } = require('./hobbitsModel.js');

describe('hobbits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('insert()', () => {
    it('should insert the provided hobbits', async () => {
      await insert({ name: 'Matt' });
      await insert({ name: 'Jonathan' });

      const hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(2);
    });

    it('should insert the provided hobbit', async () => {
      let hobbit = { name: 'Sam' };
      let inserted = await insert(hobbit);
      expect(inserted.name).toBe(hobbit.name);

      hobbit = { name: 'Frodo' };
      inserted = await insert(hobbit);
      expect(inserted.name).toBe(hobbit.name);
    });
  });
});
