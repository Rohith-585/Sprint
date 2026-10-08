import { test } from '@playwright/test';
import { HotelPage } from '../../pages/HotelPage';

test('TS002 - Verify invalid city/property/location search', async ({ page }) => {

    const hotelPage = new HotelPage(page);

    await hotelPage.launchApplication();
    await hotelPage.clickHotels();
    await hotelPage.enterCity('xyz123test');

    await hotelPage.verifyNoResultsFound();
});