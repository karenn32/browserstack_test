const MainPage = require('../pageobjects/MainPage');
const FavouritePage = require('../pageobjects/FavouritePage');

describe('TC1 - Save to favourite test', () => {
    it('should add element to favourites and verify that it is saved', async () => {
        await browser.pause(3000); // waiting for app to load
        await MainPage.clickSaveBtn();
        await MainPage.clickGotItButton();
        await MainPage.clickOkButton();
        await MainPage.clickFavouritesButton();
        await FavouritePage.verifyReadingListTitle("My reading list");
    });
});
