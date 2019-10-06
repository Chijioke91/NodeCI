const Page = require('./helpers/page');

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  await page.close();
});

test('check if header has correct text', async () => {
  const text = await page.getContentsOf('a.left.brand-logo');
  expect(text).toEqual('Blogster');
});

test('clicking the login with google should start oauth flow', async () => {
  await page.click('.right a');

  const url = await page.url();

  expect(url).toMatch(new RegExp('accounts.google.com'));
});

test('should display logout button on login', async () => {
  await page.login();

  const text = await page.getContentsOf('a[href="/auth/logout"]');

  expect(text).toEqual('Logout');
});
