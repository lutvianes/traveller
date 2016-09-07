import * as mapTypes from 'angular2-google-maps/core/services/google-maps-types';

export interface DirectionsRequest {
    origin: mapTypes.LatLngLiteral;
    destination: mapTypes.LatLngLiteral;
    travelMode: string;
}