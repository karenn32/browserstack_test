const HistoryPage = require('../pageobjects/HistoryPage');
const MainPage = require('../pageobjects/MainPage');
const TabsPage = require('../pageobjects/TabsPage');

describe('Tabs test', () => {
    it('should open article and check that it is added to tabs', async () => {
        await browser.pause(3000); // Ожидание загрузки приложения
        await MainPage.clickArticleButton();
        await MainPage.clickCloseArticleButton();
        await MainPage.clickTabsButton();
        await TabsPage.verifyFirstElementTitle("Secretum (British Museum)"); 
    });
});
