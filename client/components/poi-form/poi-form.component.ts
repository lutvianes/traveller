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
    onAddPoi = new EventEmitter<Poi>();

    constructor(private poiService: PoiService) {}

    add(): void {
        this.poiService.create(this.model)
            .then(poi => {
                alert("success");
                this.onAddPoi.emit(poi);
                this.refresh();
            });
    }

    refresh(): void {
        this.model = new Poi();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
