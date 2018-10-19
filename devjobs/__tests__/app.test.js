const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  it('should respond to the GET method', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('#/signup', () => {
  it('should not respond to the GET method', async () => {
    const res = await request(app)
      .get('/signup/');
    expect(res.statusCode).toEqual(404);
  });

  it('should POST a new user', async () => {
    const res = await request(app)
      .post('/signup/')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({
        username: 'username',
        password: 'password',
        name: 'Zach Farber',
        description: 'description',
        zipcode: '11215',
        industryWanted: 'industry',
        titleWanted: 'title',
      });
    expect(res.statusCode).toEqual(200);
  });
});
