import './extensions/rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { routing } from './app.routing';

import { AppComponent, PoiFormComponent, PoisComponent, MapEditorComponent } from './components';
import { PoiService } from './services';

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
        MapEditorComponent
    ],
    providers:      [
        PoiService
    ],
    bootstrap:      [ AppComponent ]
})

export class AppModule { }
