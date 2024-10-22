const { test, expect } = require('@playwright/test');

test('test form', async ({ page }) => {
    await page.goto('https://cfac.byu.edu/cfac-portal-2/website-help-tools/request-website/');
    await expect(page.getByRole('heading', { name: 'Website Request Form', exact: true })).toBeVisible();
    await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('Hunter');
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('test@test.com');
    await page.getByLabel('Phone (optional)').click();
    await page.getByLabel('Phone (optional)').fill('000-000-0000');
    await page.getByLabel('Academic Unit', { exact: true }).click();
    await page.getByRole('option', { name: 'Other' }).click();
    await page.getByLabel('Deadline Let us know when').click();
    await page.getByRole('link', { name: '16' }).click();
    await page.getByLabel('Site URL URL of request or').click();
    await page.getByLabel('Site URL URL of request or').fill('test url');
    await page.getByLabel('Title of Submission Please').click();
    await page.getByLabel('Title of Submission Please').fill('test title');
    await page.getByLabel('Description of Request').click();
    await page.getByLabel('Description of Request').fill('test description');
    await page.getByLabel('Department Approved', { exact: true }).click();
    await page.getByRole('option', { name: 'Yes' }).click();
    await page.getByLabel('Web Request Timeline Agreement', { exact: true }).click();
    await page.getByRole('option', { name: 'Yes' }).click();
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Thank You For Your Submission!')).toBeVisible();
});