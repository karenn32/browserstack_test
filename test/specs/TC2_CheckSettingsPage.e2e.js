const MainPage = require('../pageobjects/MainPage');
const SettingsPage = require('../pageobjects/SettingsPage');

describe('TC2 - Open settings page test', () => {
    it('should open settings and check that it is open', async () => {
        await browser.pause(3000); // waiting for the app to load
        await MainPage.clickBurgerButton();
        await MainPage.clickSettingsButton();
        await SettingsPage.verifyTitle("Settings");
    });
});
