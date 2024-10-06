class FavouritePage {
    // locator for element with text "My reading list"
    get readingListTitle() {
        return $('//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/item_title"]');
    }

    // Checking text of the list
    async verifyReadingListTitle(expectedText) {
        await this.readingListTitle.waitForDisplayed({ timeout: 5000 });
        const titleText = await this.readingListTitle.getText();
        expect(titleText).toBe(expectedText);
    }
}

module.exports = new FavouritePage();
