import { Angular2PlaylistPage } from './app.po';

describe('angular2-playlist App', function() {
  let page: Angular2PlaylistPage;

  beforeEach(() => {
    page = new Angular2PlaylistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
