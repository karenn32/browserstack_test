// ./pageobjects/MainPage.js
class MainPage {
    // Локаторы
    get gotItButton() {
        return $(`//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/onboarding_button"]`);
    }

    get tabsButton() {
        return $(`//android.widget.TextView[@content-desc="Show tabs"]`);
    }

    get articleButton() {
        return $(`//android.widget.ImageView[@resource-id="org.wikipedia.alpha:id/view_featured_article_card_image"]`);
    }

    get featuredArticleTitle() {
        return $(`//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/view_featured_article_card_article_title"]`);
    }

    get closeArticleButton() {
        return $(`//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/view_wiki_error_button"]`);
    }

    get historyButton() {
        return $(`(//android.widget.ImageView[@resource-id="org.wikipedia.alpha:id/icon"])[3]`);
    }

    get okButton() {
        return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
    }
    get burgerButton() {
        return $(`//android.widget.TextView[@content-desc="More options"]`);
    }

    get settingsButton() {
        return $(`//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/explore_overflow_settings"]`);
    }

    get favouritesButton() {
        return $(`(//android.widget.ImageView[@resource-id="org.wikipedia.alpha:id/icon"])[2]`);
    }

    get scrollableElement() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("org.wikipedia.alpha:id/view_card_action_footer_button_icon"));');
    }

    // Методы для действий
    async clickGotItButton() {
        await this.gotItButton.click();
    }

    async clickTabsButton() {
        await this.tabsButton.click();
    }

    async clickCloseArticleButton() {
        await this.closeArticleButton.click();
    }


    async clickArticleButton() {
        await this.articleButton.click();
    }

    async clickHistoryButton() {
        await this.historyButton.click();
    }

    async getTextFeaturedArticleTitle() {
        return await this.featuredArticleTitle.getText();
    }

    async clickOkButton() {
        await this.okButton.click();
    }

    async clickBurgerButton() {
        await this.burgerButton.click();
    }

    async clickSettingsButton() {
        await this.settingsButton.click();
    }

    async clickFavouritesButton() {
        await this.favouritesButton.click();
    }

    async clickSaveBtn() {
        const element = await this.scrollableElement;
        if (await element.isDisplayed()) {
            await element.click();
        } else {
            console.log("Element not found after scroll.");
        }
    }
}

module.exports = new MainPage();
