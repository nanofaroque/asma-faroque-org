import { AsmaFaroquePage } from './app.po';

describe('asma-faroque App', function() {
  let page: AsmaFaroquePage;

  beforeEach(() => {
    page = new AsmaFaroquePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
