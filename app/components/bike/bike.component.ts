import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AppService } from '../../services/app.service';

@Component({
    selector: 'bike',
    templateUrl: './app/components/bike/bike.component.html'
})
export class BikeComponent implements OnInit {
    private bike:any;

    constructor(private appService: AppService,
        private route: ActivatedRoute) { }

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
                } catch (error) { }
            });
    }

    private getBikesAdsByNameAndyear(name: string, year: string): void {
        this.appService.getBikeAdsByNameYearMinAndYearMax(name, year, year)
            .then(response => {
                try {
                    this.bike.ads = response.json();
                    /*(response.json() as any[]).forEach(ad => {
                        this.bike.ads.push({ city: ad.city, zip: ad.zipcode, url: ad.url, price: ad.price });
                        console.dir(this.bike.ads)
                    })*/
                } catch (error) { }
            });
    }
}