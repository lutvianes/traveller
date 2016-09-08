import { Component } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { LatLngLiteral } from 'angular2-google-maps/core/services/google-maps-types';

declare var google: any;

@Component({
    selector: 'map',
    template: '<span></span>'
})

export class MapComponent {

    private map;
    private directionsDisplay;

    constructor(private wrapper: GoogleMapsAPIWrapper) {
        this.wrapper.getNativeMap().then(map => {
            this.map = map;
        });
    }

    displayDirections(result) {
        if (!this.directionsDisplay) {
            this.directionsDisplay = new google.maps.DirectionsRenderer();
            this.directionsDisplay.setMap(this.map);
        }
        this.directionsDisplay.setDirections(result);
    }

    clearDirections() {
        if (this.directionsDisplay != null) {
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = null;
        }
    }
}
