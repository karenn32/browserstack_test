const HistoryPage = require('../pageobjects/HistoryPage');
const MainPage = require('../pageobjects/MainPage');

describe('Track history test', () => {
    it('should open article and check that it is added to history', async () => {
        await browser.pause(3000); // Ожидание загрузки приложения
        const articleTitle = await MainPage.getTextFeaturedArticleTitle();
        await MainPage.clickArticleButton();
        await MainPage.clickCloseArticleButton();
        await MainPage.clickHistoryButton();
        await HistoryPage.clickClearHistoryBtn();
        await HistoryPage.clickClearHistoryApprove();
        await expect(HistoryPage.histiryEmptyTitle).toBePresent();
    });
});
