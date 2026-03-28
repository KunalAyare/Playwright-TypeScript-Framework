import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as XLSX from 'xlsx';


const workbook = XLSX.readFile('./testdata/users.csv');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const users = XLSX.utils.sheet_to_json(sheet);

for (const user of users as any[]) {
    test (`login with ${user.username}` , async ({page}) => {
        const loginPage  = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        await expect(page).toHaveURL(/inventory/);
    }); 
    }