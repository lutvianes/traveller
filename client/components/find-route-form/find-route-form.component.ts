import {Component, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {DirectionsService, PoiUiService, PoiService} from '../../services';
import {Poi} from '../../models';

@Component({
    selector: 'find-route-form',
    templateUrl: './find-route-form.component.html'
})

export class FindRouteFormComponent implements OnDestroy {

    pois: Poi[];
    origin: Poi;
    destination: Poi;

    private subscriptions: Subscription[] = [];

    @Output()
    onSubmit = new EventEmitter<any>();

    constructor(
        private poiService: PoiService,
        private poiUiService: PoiUiService,
        private directionsService: DirectionsService
    ) {
        this.subscriptions.push(
            this.poiUiService.poisInit$.subscribe(
                pois => {
                    this.pois = pois;
                    this.origin = this.pois[0];
                    this.destination = this.pois[1];
                }
            )
        );

        this.subscriptions.push(
            this.poiUiService.poiAdded$.subscribe(
                poi => this.pois.push(poi)
            )
        );

        this.subscriptions.push(
            this.poiUiService.poiDeleted$.subscribe(
                poi => this.pois = this.pois.filter(
                    p => p !== poi
                )
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    findRoutes() {
        this.directionsService.route({
            origin: {
                lat: this.origin.latitude,
                lng: this.origin.longitude
            },
            destination: {
                lat: this.destination.latitude,
                lng: this.destination.longitude
            },
            travelMode: 'DRIVING'
        })
        .then(result => this.onSubmit.emit(result))
        .catch(err => alert(err));
    }

    onChangeOrigin(poi: Poi) {
        this.origin = poi;
    }

    onChangeDestination(poi: Poi) {
        this.destination = poi;
    }
}