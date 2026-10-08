import { test } from '@playwright/test';
import { HotelPage } from '../../pages/HotelPage';

test('Verify Price Per Night Filter', async ({ page }) => {

    const hotelPage = new HotelPage(page);

    await hotelPage.launchApplication();
    await hotelPage.clickHotels();
    await hotelPage.selectPriceFilter();
    
    
    
});