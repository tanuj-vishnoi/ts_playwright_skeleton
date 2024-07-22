import { Locator, Page } from "@playwright/test";

export class CustomComponent{

    locator: Locator;

    constructor(page: Page){
        //this.locator = page.locator('#onetrust-banner-sdk')
    }

    async acceptModal(){
         //await this.locator.getByRole('button', { name: 'Accept' }).click();
    }
}