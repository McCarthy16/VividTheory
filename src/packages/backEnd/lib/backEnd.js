export class backEnd {
    constructor() {
        this.articles = [];
    }
    setElements() {
        this.articles = [{ id: 1, url: "Article/01", title: 'Article 01', body: 'This is Article 01' },
            { id: 2, url: "Article/02", title: 'Article 02', body: 'This is Article 02' },
            { id: 3, url: "Article/03", title: 'Article 03', body: 'This is Article 03' },
            { id: 5, url: "Article/04", title: 'Article 05', body: 'This is Article 05' },
            { id: 6, url: "Article/05", title: 'Article 06', body: 'This is Article 06' },
            { id: 7, url: "Article/06", title: 'Article 07', body: 'This is Article 07' },
            { id: 8, url: "Article/07", title: 'Article 08', body: 'This is Article 08' },
            { id: 9, url: "Article/08", title: 'Article 09', body: 'This is Article 09' }];
    }
    getElements() {
        return this.articles;
    }
}
//# sourceMappingURL=backEnd.js.map