import { NguCoursePage } from './app.po';

describe('ngu-course App', () => {
  let page: NguCoursePage;

  beforeEach(() => {
    page = new NguCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
