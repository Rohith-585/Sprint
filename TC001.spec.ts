import { test } from '@playwright/test';
import { HotelPage } from '../../pages/HotelPage';

test('TS001 - Verify Hotel Search Functionality', async ({ page }) => {

    const hotelPage = new HotelPage(page);

    await hotelPage.launchApplication();
    await hotelPage.clickHotels();
    await hotelPage.enterCity('Goa');
    await hotelPage.selectSuggestion();
    await hotelPage.clickSearch();

    await hotelPage.verifyHotelSearchResults();
});