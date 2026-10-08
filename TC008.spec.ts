import { test } from '@playwright/test';
import { HotelPage } from '../../pages/HotelPage';

test('Verify Price Range Selection', async ({ page }) => {

    const hotelPage = new HotelPage(page);

    await hotelPage.launchApplication();
    await hotelPage.clickHotels();
    await hotelPage.selectPriceFilter();
    await hotelPage.selectPriceFilterOption();
   
    
});