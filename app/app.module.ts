import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeroesComponent}   from './heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";

import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";

import {HeroSearchComponent} from "./hero-search.component";
import './rxjs-extensions';



@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    bootstrap:    [ AppComponent ],
    providers:[
        HeroService
    ]
})
export class AppModule { }
