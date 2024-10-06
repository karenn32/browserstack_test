const HistoryPage = require('../pageobjects/HistoryPage');
const MainPage = require('../pageobjects/MainPage');

describe('Track history test', () => {
    it('should open article and check that it is added to history', async () => {
        await browser.pause(3000); // Ожидание загрузки приложения
        await MainPage.clickArticleButton();
        await MainPage.clickHistoryButton();
        await HistoryPage.verifyHistoryPageTitle("History");
        await HistoryPage.verifySavedArticleTitle("Secretum (British Museum)");
    });
});
