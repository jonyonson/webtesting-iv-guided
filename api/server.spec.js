const supertest = require('supertest');
const server = require('./server');

describe('server', () => {
  describe('GET/', () => {
    // ayncronous test either need to return the promise
    it('responds with 200 ok', () => {
      return supertest(server)
        .get('/')
        .expect(200);
    });

    // or use async/await
    it('should return a JSON object', async () => {
      await supertest(server)
        .get('/')
        .expect('Content-Type', /json/i);
    });

    it('responds {api: "up"}', async () => {
      await supertest(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({ api: 'up' });
        });
    });
  });
});
