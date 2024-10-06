const HistoryPage = require('../pageobjects/HistoryPage');
const MainPage = require('../pageobjects/MainPage');

describe('TC3 - Track history test', () => {
    it('should open article and check that it is added to history', async () => {
        await browser.pause(3000); // Waiting for the app to load
        const articleTitle = await MainPage.getTextFeaturedArticleTitle();
        await MainPage.clickArticleButton();
        await MainPage.clickCloseArticleButton();
        await MainPage.clickHistoryButton();
        await HistoryPage.verifyHistoryPageTitle("History");
        await HistoryPage.verifySavedArticleTitle(articleTitle);
    });
});
