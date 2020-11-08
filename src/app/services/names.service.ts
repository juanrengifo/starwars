import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class NamesService {

    constructor(
        private _http: HttpClient
        
    ) {
        
      }

    getNames(url) {

        return this._http.get(url);
    }
}
