import { EsbConsolePage } from './app.po';

describe('esb-console App', () => {
  let page: EsbConsolePage;

  beforeEach(() => {
    page = new EsbConsolePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
