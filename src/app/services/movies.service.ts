import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class MoviesService {

    public url: string;

    constructor(
        // tslint:disable-next-line: variable-name
        private _http: HttpClient
    ) {
        this.url = 'https://swapi.py4e.com/api/';
      }

    getMovies() {
        return this._http.get(this.url + 'films/');
    }
}
