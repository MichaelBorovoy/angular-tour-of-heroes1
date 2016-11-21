import {Component, Input, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
@Component({
    moduleId:module.id,
    selector: 'my-hero-detail',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private location:Location
    ){}
    ngOnInit():void{
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    goBack(): void{
        this.location.back();
    }

}