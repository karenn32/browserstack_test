class FavouritePage {
    // locator for element with text "My reading list"
    get settingsPageTitle() {
        return $('//android.widget.TextView[@text="Settings"]');
    }

    // Checking text of the title
    async verifyTitle(expectedText) {
        await this.settingsPageTitle.waitForDisplayed({ timeout: 5000 });
        const titleText = await this.settingsPageTitle.getText();
        expect(titleText).toBe(expectedText);
    }
}

module.exports = new FavouritePage();
