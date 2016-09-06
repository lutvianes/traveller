import './extensions/rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent, PoiFormComponent } from './components/index';
import { PoiService  } from './services/index';

@NgModule({
    imports:        [
        BrowserModule,
        FormsModule,
        HttpModule,
        // routing
    ],
    declarations:   [
        AppComponent,
        PoiFormComponent
    ],
    providers:      [
        PoiService
    ],
    bootstrap:      [ AppComponent ]
})

export class AppModule { }
