import './extensions/rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';

// import {routing} from './app.routing';

import {AppComponent, PoiFormComponent, PoisComponent, MapEditorComponent, MapComponent, FindRouteFormComponent} from './components';
import {PoiService, PoiUiService, DirectionsService} from './services';

var secret = require('../config/secrets');

@NgModule({
    imports:        [
        BrowserModule,
        FormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: secret.google.api.key
        })
        // routing
    ],
    declarations:   [
        AppComponent,
        PoiFormComponent,
        PoisComponent,
        MapEditorComponent,
        MapComponent,
        FindRouteFormComponent
    ],
    providers:      [
        PoiService,
        PoiUiService,
        DirectionsService,
        GoogleMapsAPIWrapper
    ],
    bootstrap:      [ AppComponent ]
})

export class AppModule { }
