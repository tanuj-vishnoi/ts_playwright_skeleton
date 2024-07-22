import data from "@data/data.json"
import * as dotenv from 'dotenv';
import { exit } from "process";
dotenv.config();

const supportedServer = ["qa", "local", "prod"]
const server = getAPPServer()

function getAPPServer(){
    const app_server = process.env.APP_SERVER
    if(app_server === undefined || app_server === null || app_server === ''){
        console.error("Make sure the .env file should contains the APP_SERVER valid value")
        exit(1);
    }
    if(!supportedServer.includes(app_server)){
        console.error(`Only supported values are ${supportedServer}`)
        exit(1);
    }
    return app_server;
}

export function getApplicationURL(){
    return data[server].url
}


