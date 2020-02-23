import mockData from "./../../mockData/lib/mockData";
const mysql = require('mysql');
export class backEnd {
    constructor() {
        this.articles = mockData();
    }
    setConnection() {
        let database = mysql.createConnection({
            host: "35.233.216.96",
            user: "MyUser",
            password: "Marie1234shyla@"
        });
        database.connect()
    }
    setElements() {
    }
    getElements() {
        return this.articles;
    }
}
//# sourceMappingURL=backEnd.js.map