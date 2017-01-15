import { HotgigPage } from './app.po';

describe('hotgig App', function() {
  let page: HotgigPage;

  beforeEach(() => {
    page = new HotgigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
