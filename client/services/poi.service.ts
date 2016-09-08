import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {Poi} from '../models';

@Injectable()
export class PoiService {

    private poiUrl = "api/pois";
    private headers = new Headers({'Content-type': 'application/json'});

    constructor(private http: Http) {}

    create(poi: Poi): Promise<Poi> {
        return this.http
            .post(this.poiUrl, JSON.stringify(poi), {headers: this.headers})
            .toPromise()
            .then(response => this.toPoi(response.json()))
            .catch(this.handleError);
    }

    getAll(): Promise<Poi[]> {
        return this.http
            .get(this.poiUrl)
            .toPromise()
            .then(response => response.json() as Poi[])
            .catch(this.handleError);
    }

    delete(id: number): Promise<Poi> {
        const url = `${this.poiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error);
    }

    toPoi(obj: any): Poi {
        return {
            id: obj.id,
            name: obj.name,
            latitude: obj.latitude,
            longitude: obj.longitude
        };
    }
}
