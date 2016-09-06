import { Component, OnInit } from '@angular/core';

import { Poi } from '../../models/index';
import { PoiService } from '../../services/index';

@Component({
    selector: 'pois',
    template: `
        <div>
            <ul>
                <li *ngFor="let poi of pois">
                    {{poi.name}}
                    <button (click)="delete(poi)">del</button>
                </li>
            </ul>
        </div>
    `
})

export class PoisComponent implements OnInit {
    pois: Poi[];

    constructor(private poiService: PoiService) {}

    ngOnInit(): void {
        this.poiService.getPois()
            .then(pois => this.pois = pois);
    }

    add(poi: Poi): void {
        this.pois.push(poi);
    }

    delete(poi: Poi): void {
        this.poiService.delete(poi.id)
            .then(() => {
                this.pois = this.pois.filter(p => p !== poi);
            })
    }
}
