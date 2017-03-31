import { FoodDiaryPage } from './app.po';

describe('food-diary App', () => {
  let page: FoodDiaryPage;

  beforeEach(() => {
    page = new FoodDiaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
