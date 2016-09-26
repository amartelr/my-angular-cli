import { DosPage } from './app.po';

describe('dos App', function() {
  let page: DosPage;

  beforeEach(() => {
    page = new DosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
