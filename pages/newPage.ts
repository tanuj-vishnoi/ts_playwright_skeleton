import { Locator, Page } from "@playwright/test";
import { basePage } from "./basePage";

export class MainPage implements basePage{
    
    rootElement: Locator;
    page: Page;

    constructor(page: Page){
        this.page =page;
    }

    setRoot(locator?: Locator): Locator {
        if(locator){
            this.rootElement = locator
        }else{
            this.rootElement = this.page.getByTestId("");
        }
       return this.rootElement;
    }

    getRoot(): Locator {
       return this.rootElement;
    }

    
}