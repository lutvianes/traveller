import {Component} from '@angular/core';

import {Poi} from '../../models';
import {PoiService, PoiUiService} from '../../services';

@Component({
    selector: 'poi-form',
    templateUrl: './poi-form.component.html'
})

export class PoiFormComponent {
    active = true;
    model = new Poi();

    constructor(
        private poiService: PoiService,
        private poiUiService: PoiUiService
    ) {}

    add(): void {
        this.poiService.create(this.model)
            .then(poi => {
                this.poiUiService.add(poi);
                this.reset();
            });
    }

    setPosition(latitude: number, longitude: number): void {
        this.model.latitude = latitude;
        this.model.longitude = longitude;
    }

    reset(): void {
        this.model = new Poi();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
