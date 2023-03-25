// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 4000;
const fs = require('fs');

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
  path = fs.realpathSync('index.html');
  await page.goto('file://' + path, {waitUntil: 'domcontentloaded'});
});

describe('Title of the page', () => {
  test('Title of the page', async () => {
    const title = await page.title();
    expect(title).toBe('Shark Bank');

  }, timeout);
});
