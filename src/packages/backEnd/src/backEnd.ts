import {Article} from "./../../shared/lib/Article";
import mockData from "./../../mockData/lib/mockData";

const mysql = require('mysql')
// backEnd connection for grabbing articles for dashboard page
// TODO: connect with a database
// DB: 35.233.216.96 


export class backEnd{
	articles:any[];
	database:any;
	constructor(){
		this.articles = mockData();
		
}
	setConnection(): void{
		var database = mysql.createConnection({
			host: "35.233.216.96",
			user: "MyUser",
			password:"Marie1234shyla@"
		});

		//database.connect(function(err) {
		//  if (err) {
		//    console.error('error connecting: ' + err.stack);
		//    return;
		//  }

		// console.log('connected as id ' + database.threadId);
		//});
	}

	setElements(): void {

	//	this.articles = mockData;
	}
    getElements(): Article[] {
        return this.articles;
    }
}