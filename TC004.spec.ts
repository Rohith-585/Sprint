import { test } from '@playwright/test';
import { HotelPage } from '../../pages/HotelPage';

test('Verify valid Check-Out date selection', async ({ page }) => {

    const hotelPage = new HotelPage(page);

    await hotelPage.launchApplication();
    await hotelPage.clickHotels();
    await hotelPage.selectCheckOutDate();
    await hotelPage.selectFutureCheckOutDate();
    
});