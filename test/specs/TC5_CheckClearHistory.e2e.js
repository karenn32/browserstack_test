const HistoryPage = require('../pageobjects/HistoryPage');
const MainPage = require('../pageobjects/MainPage');

describe('TC5 - Clear history test', () => {
    it('should clear history and check that it is empty', async () => {
        await browser.pause(3000); // Waiting for the app to load
        await MainPage.clickArticleButton();
        await MainPage.clickCloseArticleButton();
        await MainPage.clickHistoryButton();
        await HistoryPage.clickClearHistoryBtn();
        await HistoryPage.clickClearHistoryApprove();
        await expect(HistoryPage.histiryEmptyTitle).toBePresent();
    });
});
