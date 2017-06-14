import { RegDemoPage } from './app.po';

describe('reg-demo App', () => {
  let page: RegDemoPage;

  beforeEach(() => {
    page = new RegDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
