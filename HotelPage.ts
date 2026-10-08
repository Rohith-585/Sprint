import { Page, Locator,  expect } from '@playwright/test';

export class HotelPage {

    readonly page: Page;
    readonly hotelsTab: Locator;
    readonly closePopup: Locator;
    readonly cityInput: Locator;
    readonly cityTextBox: Locator;
    readonly suggestionOption: Locator;
    readonly searchButton: Locator;
    readonly noResultsFound: Locator;
    readonly checkInDateField: Locator;
    readonly checkInDatePicker: Locator;
    readonly checkOutDateField: Locator;
    readonly checkOutDatePicker: Locator;
    readonly roomSelectionField: Locator;
    readonly numberOfRoomsField: Locator;
    readonly adultIncrementButton: Locator;
    readonly applyButton: Locator;
    readonly pricePerNightFilter: Locator;
    readonly priceFilterOption: Locator;

    constructor(page: Page) {

        this.page = page;

        this.hotelsTab = page.locator('.chHotels').first();

        this.closePopup = page.locator('.commonModal__close:visible').first();

        this.cityInput = page.locator('#city');

        this.cityTextBox =
            page.getByPlaceholder('Where do you want to stay?');

        this.suggestionOption =
            page.locator('.freeText').first();

        this.searchButton =
            page.locator('.chevronIconRight').first();

        this.noResultsFound =
            page.locator('.hw__searchResultNotFoundText');

        this.checkInDateField = page.locator('[data-cy="checkin"]');
        this.checkInDatePicker = page.locator('[aria-label="Fri Oct 09 2026"]').first();
        this.checkOutDateField = page.locator('[data-cy="checkout"]');
        this.checkOutDatePicker = page.locator('[aria-label="Sat Oct 10 2026"]').first();
        this.roomSelectionField = page.locator('.hsw_inputBox.roomGuests');
        this.numberOfRoomsField = page.locator('.counter__button--increment').first();
        this.adultIncrementButton = page.locator('[aria-label="Adults counter"]').locator('.counter__button--increment');
        this.applyButton=page.getByRole('button', { name: 'Apply' });
        this.pricePerNightFilter = page.locator('[data-cy="HotelSearchWidget_049"]').first();
        this.priceFilterOption = page.getByText('₹0-₹1500');
    }

    async launchApplication() {
        await this.page.goto('https://www.makemytrip.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    async closeLoginPopup() {
        

        await this.closePopup.click();
    }

    async clickHotels() {

        await this.closeLoginPopup();

        await this.hotelsTab.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.hotelsTab.click();
    }

    async clickCityField() {

        await this.cityInput.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.cityInput.click();
    }

    async enterCity(city: string) {

        await this.clickCityField();

        await this.cityTextBox.fill(city);
    }

    async selectSuggestion() {

        await this.suggestionOption.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.suggestionOption.click();
    }

    async clickSearch() {

        await this.searchButton.click();
    }

    async verifyHotelSearchResults() {

        await expect(this.page).toHaveURL(/hotels/i);
    }

    async verifyNoResultsFound() {

        await expect(this.noResultsFound).toBeVisible();
    }

    async selectCheckInDate() {
    await this.checkInDateField.click();
    }

    async selectFutureCheckInDate() {
        await this.checkInDatePicker.click();
    }
    async selectCheckOutDate() {
        await this.checkOutDateField.click();
    }
    async selectFutureCheckOutDate() {
        await this.checkOutDatePicker.click();
    }
    async selectRoomSelection() {
        await this.roomSelectionField.click();
    }
    async selectNumberOfRooms() {
        await this.numberOfRoomsField.click();
    }
    async incrementAdultCount() {
        await this.adultIncrementButton.click();
    }
    async clickApplyButton() {
        await this.applyButton.click();
    }
    async selectPriceFilter() {
        await this.pricePerNightFilter.click();
    }
    async selectPriceFilterOption() {
        await this.priceFilterOption.waitFor({
        state: 'visible'
        });

        await this.priceFilterOption.click();
    }



       


}    