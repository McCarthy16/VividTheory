import {Article} from "./../../shared/lib/Article";

export class backEnd{
	articles:Article[];

	constructor(){
		this.articles = [];
}
	
	setElements(): void {
		this.articles = [{ id: 1, title: 'Article 01', body: 'This is Article 01' },
    					{ id: 2, title: 'Article 02', body: 'This is Article 02' },
   						 { id: 3, title: 'Article 03', body: 'This is Article 03' }]
	}
    getElements(): Article[] {
        return this.articles;
    }
}