export class backEnd {
    constructor() {
        this.articles = [];
    }
    setElements() {
        this.articles = [{ id: 1, title: 'Article 01', body: 'This is Article 01' },
            { id: 2, title: 'Article 02', body: 'This is Article 02' },
            { id: 3, title: 'Article 03', body: 'This is Article 03' }];
    }
    getElements() {
        return this.articles;
    }
}
//# sourceMappingURL=backEnd.js.map