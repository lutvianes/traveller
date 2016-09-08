import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Poi} from '../models';

@Injectable()
export class PoiUiService {

	private poisInitSource;
	private poiAddedSource;
	private poiDeletedSource;

	poisInit$;
	poiAdded$;
	poiDeleted$;

	constructor() {
		this.poisInitSource = new Subject<Poi[]>();
		this.poiAddedSource = new Subject<Poi>();
		this.poiDeletedSource = new Subject<Poi>();

		this.poisInit$ = this.poisInitSource.asObservable();
		this.poiAdded$ = this.poiAddedSource.asObservable();
		this.poiDeleted$ = this.poiDeletedSource.asObservable();
	}

	init(pois: Poi[]) {
		this.poisInitSource.next(pois);
	}

	add(poi: Poi) {
		this.poiAddedSource.next(poi);
	}

	delete(poi: Poi) {
		this.poiDeletedSource.next(poi);
	}

}