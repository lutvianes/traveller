import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Poi } from '../../models/index';
import { PoiService } from '../../services/index';

@Component({
    selector: 'pois',
    templateUrl: './pois.component.html'
})

export class PoisComponent implements OnInit {

    pois: Poi[] = [];
    selectedPoi: Poi;

    @Output()
    onAdded = new EventEmitter<Poi>();
    @Output()
    onDeleted = new EventEmitter<Poi>();
    @Output()
    onSelected = new EventEmitter<Poi>();

    constructor(private poiService: PoiService) {}

    ngOnInit(): void {
        this.poiService.getPois()
            .then(pois => pois.forEach(poi => this.add(poi)));
    }

    add(poi: Poi): void {
        this.pois.push(poi);
        this.onAdded.emit(poi);
    }

    select(poi: Poi): void {
        this.selectedPoi = poi;
        this.onSelected.emit(poi);
    }

    delete(poi: Poi): void {
        this.poiService.delete(poi.id)
            .then(() => {
                this.pois = this.pois.filter(p => p !== poi);
                this.onDeleted.emit(poi);
            })
    }
}
