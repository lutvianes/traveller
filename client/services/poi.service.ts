import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Poi } from '../models/index';

@Injectable()
export class PoiService {
    private poiUrl = "api/pois";
    private headers = new Headers({'Content-type': 'application/json'});

    constructor(private http: Http) {}

    create(poi: Poi): Promise<Poi> {
        return this.http
            .post(this.poiUrl, JSON.stringify(poi), {headers: this.headers})
            .toPromise()
            .then(() => poi)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error);
    }
}
