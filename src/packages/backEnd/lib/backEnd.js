import mockData from "./../../mockData/lib/mockData";
export class backEnd {
    constructor() {
        this.articles = mockData();
    }
    setConnection() {
    }
    setElements() {
    }
    getElements() {
        return this.articles;
    }
}
//# sourceMappingURL=backEnd.js.map