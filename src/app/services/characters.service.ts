import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CharactersService {

    public url: string;

    constructor(
        // tslint:disable-next-line: variable-name
        private _http: HttpClient
    ) {
        this.url = 'https://swapi.py4e.com/api/';
      }

    getCharacters(personaje) {
        return this._http.get(this.url + 'people/' + personaje);
    }
}
