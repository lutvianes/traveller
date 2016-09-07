import { Component } from '@angular/core';

import { Poi } from '../../models/index';
import { Marker } from '../../interfaces/index';

@Component({
    selector: 'map-editor',
    templateUrl: './map-editor.component.html',
    styleUrls: ['./map-editor.component.css']
})

export class MapEditorComponent {
    markers: Marker[] = [];
    selected: Marker;
    center = {
        lat: -6.9147444,
        lng: 107.6098111
    };

    selectMarker(targetMarker: Marker) {
        this.markers.forEach(marker => {
                marker.visible = false;
                if (marker.id === targetMarker.id) {
                    marker.visible = true;
                    this.selected = marker;
                }
                return marker;
            });
        this.center = this.selected;
    }

    findDirecitons(start, end) {
        let request = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        }
        
    }

    onPoiAdded(poi: Poi) {
        var marker = {
            id: poi.id,
            lat: poi.latitude,
            lng: poi.longitude
        };
        this.markers.push(marker);
        this.selectMarker(marker);
    }

    onPoiDeleted(poi: Poi) {
        if (this.selected.id === poi.id)
            this.selected = null;
        this.markers = this.markers.filter(marker => marker.id !== poi.id);
    }

    onPoiSelected(poi: Poi) {
        this.selectMarker({
            id: poi.id,
            lat: poi.latitude,
            lng: poi.longitude
        });
    }
}
