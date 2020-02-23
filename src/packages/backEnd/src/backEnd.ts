import {Article} from "./../../shared/lib/Article";
import mockData from "./../../mockData/lib/mockData";
//const mysql = require('mysql')
//const database = require("./../../database");
//var data = new database.database();
//data.setConnection();
// backEnd connection for grabbing articles for dashboard page
// TODO: connect with a database
// DB: 35.233.216.96 


export class backEnd{
	articles:any[];
	constructor(){
		this.articles = mockData();
		
}
	setConnection(): void{
		
	}

	setElements(): void {

	//	this.articles = mockData;
	}
    getElements(): Article[] {
        return this.articles;
    }
}