const { test, expect } = require('@playwright/test');

test('layout', async ({page}) => {
    await page.goto('https://cfac.byu.edu/');
    await page.getByText('Campaigns').click();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Faith + Works' })).toBeVisible();
    await page.getByRole('navigation').getByRole('link', { name: 'Faith + Works' }).click();
    await expect(page.locator('.PromoFullWidth-Large')).toBeVisible();
    await expect(page.getByText('FREE LECTURE SERIES FOR CFAC FACULTY, STUDENTS & STAFF')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Past Lectures' })).toBeVisible();
});