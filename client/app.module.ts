import './extensions/rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
// import {routing} from './app.routing';

import {AppComponent, PoiFormComponent, PoisComponent, MapEditorComponent, MapComponent, FindRouteFormComponent} from './components';
import {PoiService, DirectionsService} from './services';

var apiKey = require('../config/secrets/google-api');

@NgModule({
    imports:        [
        BrowserModule,
        FormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: apiKey
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
        DirectionsService,
        GoogleMapsAPIWrapper
    ],
    bootstrap:      [ AppComponent ]
})

export class AppModule { }
