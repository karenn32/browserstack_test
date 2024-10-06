const HistoryPage = require('../pageobjects/HistoryPage');
const MainPage = require('../pageobjects/MainPage');
const TabsPage = require('../pageobjects/TabsPage');

describe('TC4 Tabs test', () => {
    it('should open article and check that it is added to tabs', async () => {
        await browser.pause(3000); // Waiting for the app to load
        const articleTitle = await MainPage.getTextFeaturedArticleTitle();
        await MainPage.clickArticleButton();
        await MainPage.tabsButton.waitForDisplayed({ timeout: 5000 });
        await MainPage.clickTabsButton();
        await TabsPage.verifyFirstElementTitle(articleTitle);
    });
});
