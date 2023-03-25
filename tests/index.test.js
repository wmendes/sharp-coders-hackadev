// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 4000;
const fs = require('fs');

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
  path = fs.realpathSync('index.html');
  await page.goto('file://' + path, {waitUntil: 'domcontentloaded'});
});

describe('Index tests', () => {
  test('check if the button acessar exists', async () => {
    const button = await page.$("#botao-acessar")
    let value = await page.evaluate(el => el.textContent, button)
    expect(value).toBe('Acessar');

  }, timeout);
});
