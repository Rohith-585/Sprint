import { test } from '@playwright/test';
import { HotelPage } from '../../pages/HotelPage';

test('Verify future Check-In date selection', async ({ page }) => {

    const hotelPage = new HotelPage(page);

    await hotelPage.launchApplication();
    await hotelPage.clickHotels();
    await hotelPage.selectCheckInDate();
    await hotelPage.selectFutureCheckInDate();
    
});