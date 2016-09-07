import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {DirectionsService, PoiUiService, PoiService} from '../../services';
import {Poi} from '../../models';

@Component({
	selector: 'find-route-form',
	template: `
		<select [ngModel]="origin" (ngModelChange)="onChangeOrigin($event)" name="origin">
    <option *ngFor="let poi of pois" [ngValue]="poi">{{poi.name}}</option>
</select>
<select [ngModel]="destination" (ngModelChange)="onChangeDestination($event)" name="destination">
    <option *ngFor="let poi of pois" [ngValue]="poi">{{poi.name}}</option>
</select>
<button (click)="findRoutes()">Find</button>
	`
})

export class FindRouteFormComponent implements OnInit, OnDestroy {

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

    ngOnInit() {
        // TODO: Need to be removed
        this.poiService.getAll()
            .then(pois => this.pois = pois);
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
            .then(result => this.onSubmit.emit(result));
    }

    onChangeOrigin(poi: Poi) {
        this.origin = poi;
    }

    onChangeDestination(poi: Poi) {
        this.destination = poi;
    }
}