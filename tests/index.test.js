// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 4000;
const fs = require('fs');

beforeAll(async () => {
    await page.goto('http://localhost:8001');
  });

describe('Index tests', () => {
  test('check if the button acessar exists', async () => {
    const button = await page.$("#botao-acessar")
    let value = await page.evaluate(el => el.textContent, button)
    expect(value).toBe('Acessar');

  }, timeout);
});
