import { Locator } from "@playwright/test";

export interface basePage{

    rootElement: Locator;

    setRoot(locator?:Locator) : Locator;

    getRoot(): Locator
}