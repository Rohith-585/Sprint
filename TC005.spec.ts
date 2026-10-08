import { test } from '@playwright/test';
import { HotelPage } from '../../pages/HotelPage';

test('Verify room and guest selection', async ({ page }) => {

    const hotelPage = new HotelPage(page);

    await hotelPage.launchApplication();
    await hotelPage.clickHotels();
    await hotelPage.selectRoomSelection();
    await hotelPage.selectNumberOfRooms();
    await hotelPage.incrementAdultCount();
    
    
});