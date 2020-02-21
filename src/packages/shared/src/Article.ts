// interface for Article types
// TODO: change body to markdown filetype | leave string and have backEnd convert to string
export interface Article{
	id:number;
	url:string;
	title:string;
	body:string
}