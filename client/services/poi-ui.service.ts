import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Poi} from '../models';

@Injectable()
export class PoiUiService {

	private poiAddedSource = new Subject<Poi>();
	private poiDeletedSource = new Subject<Poi>();

	poiAdded$ = this.poiAddedSource.asObservable();
	poiDeleted$ = this.poiDeletedSource.asObservable();

	add(poi: Poi) {
		this.poiAddedSource.next(poi);
	}

	delete(poi: Poi) {
		this.poiDeletedSource.next(poi);
	}

}