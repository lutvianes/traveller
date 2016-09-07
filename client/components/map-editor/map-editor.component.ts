import {Component, ViewChild} from '@angular/core';

import {MapComponent} from '../map/map.component';
import {Marker} from '../../interfaces';
import {Poi} from '../../models';
import {PoiService, PoiUiService} from '../../services';

@Component({
    selector: 'map-editor',
    templateUrl: './map-editor.component.html',
    styleUrls: ['./map-editor.component.css']
})

export class MapEditorComponent {

    markers: Marker[] = [];
    selected: Marker;
    center = {lat: -6.9147444, lng: 107.6098111};

    @ViewChild(MapComponent)
    private mapComponent: MapComponent;

    constructor(
        private poiService: PoiService,
        private poiUiService: PoiUiService
    ) {}

    displayResult(result) {
        this.mapComponent.displayDirections(result);
    }

    selectMarker(id: number) {
        this.markers.forEach(marker => {
                marker.visible = false;
                if (marker.id === id) {
                    marker.visible = true;
                    console.log(marker);
                    this.selected = marker;
                    this.center = {
                        lat: marker.lat,
                        lng: marker.lng
                    };
                }
                return marker;
            });
    }

    onPoiAdded(poi: Poi) {
        var marker = {
            id: poi.id,
            lat: poi.latitude,
            lng: poi.longitude
        };
        this.markers.push(marker);
        this.selectMarker(poi.id);
    }

    onPoiDeleted(poi: Poi) {
        if (this.selected.id === poi.id)
            this.selected = null;
        this.markers = this.markers.filter(marker => marker.id !== poi.id);
    }

    onPoiSelected(poi: Poi) {
        this.selectMarker(poi.id);
    }
}
