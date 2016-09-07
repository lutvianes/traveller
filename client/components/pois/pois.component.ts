import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Poi} from '../../models/index';
import {PoiService, PoiUiService} from '../../services';

@Component({
    selector: 'pois',
    templateUrl: './pois.component.html'
})

export class PoisComponent implements OnInit, OnDestroy {

    pois: Poi[] = [];
    selectedPoi: Poi;

    @Output()
    onSelected = new EventEmitter<Poi>();

    private subscriptions: Subscription[] = [];

    constructor(
        private poiService: PoiService,
        private poiUiService: PoiUiService
    ) {
        this.subscriptions.push(
            this.poiUiService.poiAdded$.subscribe(
                poi => this.pois.push(poi)
            ));

        this.subscriptions.push(
            this.poiUiService.poiDeleted$.subscribe(
                poi => this.pois = this.pois.filter(
                    p => p !== poi
                )
            ));
    }

    ngOnInit() {
        this.poiService.getAll().then(pois => this.pois = pois);
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    select(poi: Poi): void {
        this.selectedPoi = poi;
        this.onSelected.emit(poi);
    }

    delete(poi: Poi): void {
        this.poiService.delete(poi.id)
            .then(() => this.poiUiService.delete(poi));
    }
}
