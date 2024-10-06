const MainPage = require('../pageobjects/MainPage');
const FavouritePage = require('../pageobjects/FavouritePage');

describe('Save to favourite test', () => {
    it('should add element to favourites and verify that it is saved', async () => {
        await browser.pause(3000); // Ожидание загрузки приложения
        await MainPage.clickSaveBtn();
        await MainPage.clickGotItButton();
        await MainPage.clickOkButton();
        await MainPage.clickFavouritesButton();
        await FavouritePage.verifyReadingListTitle("My reading list");
    });
});
