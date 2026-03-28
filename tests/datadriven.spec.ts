import { test, expect} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';

const users = [
    { username: 'standard_user', password: 'secret_sauce' },
    { username: 'problem_user', password: 'secret_sauce' },
    
]

for (const user of users ) {
    test(`login with ${user.username}`, async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        await expect(page).toHaveURL(/inventory/);

    }); 

}