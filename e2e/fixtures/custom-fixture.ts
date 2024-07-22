import { CustomComponent } from '@app-components/custom-component';
import {test as base } from '@playwright/test';
import { APP_PATHS } from '@utils/enum';

export const test = base.extend<{customComponent : CustomComponent}>({
    customComponent: async ({page}, use)=>{
        await page.goto(APP_PATHS.CUSTOM_MADE);
        const cookieModal = new CustomComponent(page);
        await cookieModal.acceptModal();
        use(cookieModal);
    }
})