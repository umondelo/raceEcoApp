import { RaceAppPage } from './app.po';

describe('race-app App', function() {
  let page: RaceAppPage;

  beforeEach(() => {
    page = new RaceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
