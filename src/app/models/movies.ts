export class Movie {

    constructor(
        public title: string,
        // tslint:disable-next-line: variable-name
        public episode_id: string,
        // tslint:disable-next-line: variable-name
        public opening_crawl: string,
        public director: string,
        public producer: string,
        // tslint:disable-next-line: variable-name
        public release_date: string
    ) {}
}
