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
}
