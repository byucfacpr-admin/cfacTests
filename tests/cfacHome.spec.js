const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://cfac.byu.edu/');
    await expect(page).toHaveTitle("CFAC Home");
});

test('layout', async ({page}) => {
    await page.goto('https://cfac.byu.edu/');
    await expect(page.getByText('College of Fine Arts and Communications Menu')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    await expect(page.getByText('About', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Students' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Faculty & Staff' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Alumni' })).toBeVisible();
    await expect(page.getByText('Campaigns')).toBeVisible();
    await expect(page.getByRole('list').getByRole('link', { name: 'News' })).toBeVisible();
    await expect(page.getByText('Connect With Us')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Buy Tickets' })).toBeVisible();
    await expect(page.getByRole('main').locator('div').filter({ hasText: 'WE ARE ARTS AND' }).nth(2)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'News' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Academic Areas' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Explore the Arts' })).toBeVisible();
    await expect(page.locator('.logos > a').first()).toBeVisible();
    await expect(page.locator('.middle')).toBeVisible();
    await expect(page.locator('.logos > a:nth-child(3)')).toBeVisible();
});