import { Component, Output, EventEmitter } from '@angular/core';

import { Poi } from '../../models/index';
import { PoiService } from '../../services/index';

@Component({
    selector: 'poi-form',
    templateUrl: './poi-form.component.html'
})

export class PoiFormComponent {
    active = true;
    model = new Poi();

    @Output()
    onCreated = new EventEmitter<Poi>();

    constructor(private poiService: PoiService) {}

    add(): void {
        this.poiService.create(this.model)
            .then(poi => {
                this.onCreated.emit(poi);
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
