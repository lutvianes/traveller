import {Component, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {MapComponent} from '../map/map.component';
import {Marker} from '../../interfaces';
import {Poi} from '../../models';
import {PoiService, PoiUiService} from '../../services';

@Component({
    selector: 'map-editor',
    templateUrl: './map-editor.component.html',
    styleUrls: ['./map-editor.component.css'],
    providers: [PoiUiService]
})

export class MapEditorComponent {

    markers: Marker[] = [];
    newMarker: Marker = {id: 0, lat: 0, lng: 0};
    selected: Marker;
    center = {lat: -6.9147444, lng: 107.6098111};

    @ViewChild(MapComponent)
    private mapComponent: MapComponent;

    private subscriptions: Subscription[] = [];

    constructor(
        private poiService: PoiService,
        private poiUiService: PoiUiService
    ) {
        this.subscriptions.push(
            this.poiUiService.poisInit$.subscribe(
                pois => pois.forEach(
                    poi => this.addPoiToMarker(poi)
                )
            )
        );

        this.subscriptions.push(
            this.poiUiService.poiAdded$.subscribe(poi => {
                this.hideAddMarker();
                this.addPoiToMarker(poi);
                this.selectMarker(poi.id);
            })
        );

        this.subscriptions.push(
            this.poiUiService.poiDeleted$.subscribe(poi => {
                this.deleteMarker(poi.id);
            })
        );
    }

    newMarkerAdding(lat: number, lng: number) {
        this.newMarker.visible = true;
        this.newMarker.lat = lat;
        this.newMarker.lng = lng;
    }

    hideAddMarker() {
        this.newMarker.visible = false;
    }

    clearAll() {
        this.newMarker.visible = false;
        this.markers.forEach(marker => marker.visible = false);
        this.mapComponent.clearDirections();
    }

    displayResult(result) {
        this.mapComponent.displayDirections(result);
    }

    addPoiToMarker(poi: Poi) {
        this.markers = [...this.markers,
            {
                id: poi.id,
                lat: poi.latitude,
                lng: poi.longitude,
                title: poi.name,
                draggable: false,
                visible: false
            }
        ];
    }

    deleteMarker(id: number) {
        if (this.selected && this.selected.id === id)
            this.selected = null;
        this.markers = this.markers.filter(marker => marker.id !== id);
    }

    selectMarker(id: number) {
        this.markers.forEach(marker => {
            marker.visible = false;
            if (marker.id === id) {
                marker.visible = true;
                this.selected = marker;
                this.center = {
                    lat: marker.lat,
                    lng: marker.lng
                };
            }
            return marker;
        });
    }

    onSelectPoi(poi: Poi) {
        this.selectMarker(poi.id);
    }
}
