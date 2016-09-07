import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Marker } from '../interfaces';

@Injectable()
export class MapService {

    // Observable marker sources
    private markerAddedSource = new Subject<Marker>();
    private markerHiddenSource = new Subject<Marker>();

    // Observable marker stream
    markerAdded$ = this.markerAddedSource.asObservable();
    markerHidden$ = this.markerHiddenSource.asObservable();

    addMarker(marker: Marker) {
        this.markerAddedSource.next(marker);
    }

    showMarker(marker: Marker) {
        this.markerHiddenSource.next(marker);
    }

}
