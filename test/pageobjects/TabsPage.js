class FavouritePage {
    // locator for element with text "My reading list"
    get firstElementTitle() {
        return $('(//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/tab_item_title"]');
    }

    // Checking text of the title
    async verifyFirstElementTitle(expectedText) {
        await this.firstElementTitle.waitForDisplayed({ timeout: 5000 });
        const titleText = await this.firstElementTitle.getText();
        expect(titleText).toBe(expectedText);
    }
}

module.exports = new FavouritePage();
