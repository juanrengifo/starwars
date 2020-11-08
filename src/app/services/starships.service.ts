import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarshipsService {

    public url: string;

    constructor(
        // tslint:disable-next-line: variable-name
        private _http: HttpClient
    ) {
        this.url = 'https://swapi.py4e.com/api/';
      }

    getStarships(nave) {
        return this._http.get(this.url + 'starships/' + nave);
    }
}
