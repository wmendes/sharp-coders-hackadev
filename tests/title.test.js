// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 4000;
const fs = require('fs');

beforeAll(async () => {
  await page.goto('http://localhost:8001');
});

describe('Title of the page', () => {
  test('Title of the page', async () => {
    const title = await page.title();
    expect(title).toBe('Shark Bank');

  }, timeout);
});
