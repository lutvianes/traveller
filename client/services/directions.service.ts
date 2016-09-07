import {Injectable} from '@angular/core';

import {DirectionsRequest} from '../interfaces';

declare var google;

@Injectable()
export class DirectionsService {

    private directionsService;

    route(request: DirectionsRequest): Promise<any> {
        if (!this.directionsService)
            this.directionsService = new google.maps.DirectionsService();

        return new Promise<any>((resolve, reject) => {
            this.directionsService.route(request, (result, status) => {
                if (status === 'OK')
                    resolve(result);
                else
                    reject(status);
            });
        });
    }

}
