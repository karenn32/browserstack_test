class FavouritePage {
    get historyPageTitle() {
        return $('(//android.widget.TextView[@text="History"])[2]');
    }

    async verifyHistoryPageTitle(expectedText) {
        await this.historyPageTitle.waitForDisplayed({ timeout: 5000 });
        const titleText = await this.historyPageTitle.getText();
        expect(titleText).toBe(expectedText);
    }

    get savedArticleTitle() {
        return $('//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/page_list_item_title"]');
    }

    async verifySavedArticleTitle(expectedText) {
        await this.savedArticleTitle.waitForDisplayed({ timeout: 5000 });
        const titleText = await this.savedArticleTitle.getText();
        expect(titleText).toBe(expectedText);
    }
}

module.exports = new FavouritePage();
