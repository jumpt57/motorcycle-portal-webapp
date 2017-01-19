import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AppService } from '../../services/app.service';

import * as $ from 'jquery';

@Component({
    selector: 'bike',
    templateUrl: './app/components/bike/bike.component.html'
})
export class BikeComponent implements OnInit {
    private bike:any;

    constructor(private appService: AppService,
        private route: ActivatedRoute, private router: Router) { }

    public ngOnInit(): void { 
        this.route.params.subscribe(params => {
            this.getBikeByNameAndYear(params['name'], params['year']);
        });      
    }

    private getBikeByNameAndYear(name: string, year: string): void {
        this.appService.getBikeByNameAndYear(name, year)
            .then(response => {
                try {
                    this.bike = response.json();                    
                    this.getBikesAdsByNameAndyear(this.bike.name, this.bike.year);     
                    this.getBikesByName(this.bike.name);     
                } catch (error) { }
            });
    }

    private getBikesAdsByNameAndyear(name: string, year: string): void {
        this.appService.getBikeAdsByNameYearMinAndYearMax(name, year, year)
            .then(response => {
                try {
                    this.bike.ads = response.json();
                } catch (error) { }
            });
    }

    private getBikesByName(name: string): void {
        this.appService.getBikesByName(name)
            .then(response => {
                try {
                    this.bike.connex = response.json();
                } catch (error) { }
            });
    }
    
    private onBikeConnexChange(year: string): void {
        this.router.navigate(['/moto', year, this.bike.name]);
    }
}