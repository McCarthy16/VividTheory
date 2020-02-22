import { Article } from "./../../shared/lib/Article";
export declare class backEnd {
    articles: any[];
    database: any;
    constructor();
    setConnection(): void;
    setElements(): void;
    getElements(): Article[];
}
