import { Demo06Page } from './app.po';

describe('demo06 App', () => {
  let page: Demo06Page;

  beforeEach(() => {
    page = new Demo06Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
