const { test, expect } = require('@playwright/test');

test('layout', async ({page}) => {
    await page.goto('https://cfac.byu.edu/');
    await expect(page.getByText('Campaigns')).toBeVisible();
    await page.getByText('Campaigns').click();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Behind the Stories' })).toBeVisible();
    await page.getByRole('navigation').getByRole('link', { name: 'Behind the Stories' }).click();
    await expect(page.getByText('Seasons')).toBeVisible();
    await expect(page.getByLabel('BYU Arts & Comms: Season')).toBeVisible();
    await page.getByLabel('BYU Arts & Comms: Season').click();
    await expect(page.locator('.PromoFullWidth-Large')).toBeVisible();
    await expect(page.locator('iframe[title="Arts \\& Comms\\: Behind the Stories Season 4 Trailer"]').contentFrame().locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Season 4' }).locator('span')).toBeVisible();
    await expect(page.getByText('Meet Featured Students')).toBeVisible();
    await expect(page.getByText('Meet Featured Faculty')).toBeVisible();
    await expect(page.getByText('Behind the Scenes')).toBeVisible();
    await expect(page.getByText('Home Arts and Comms Homepage Season')).toBeVisible();
});