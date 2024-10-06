const MainPage = require('../pageobjects/MainPage');
const SettingsPage = require('../pageobjects/SettingsPage');

describe('Open settings page ', () => {
    it('should open settings and check that it is open', async () => {
        await browser.pause(3000); // Ожидание загрузки приложения
        await MainPage.clickBurgerButton();
        await MainPage.clickSettingsButton();
        await SettingsPage.verifyTitle("Settings");
    });
});
