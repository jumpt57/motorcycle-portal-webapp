import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AppService } from '../../../services/app.service';

@Component({
    selector: 'carousel',
    template: `
        <div class="carousel carousel-slider center" data-indicators="true" style="max-height: 500px; height: 500px;">           
            <div class="carousel-item black-text valign-wrapper" href="#one!" style="background: url('/assets/images/carousel-1.jpg')">   
                <br><br><br><br><br><br><br><br>  
                <div class="card-panel home-card">   
                    <div class="card-content black-text">   
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>                     
                        <h3>MotorHub c'est {{ nbManufacturers }} constructeurs ...</h3>     
                    </div>
                </div>                                   
            </div>
            <div class="carousel-item amber white-text" href="#two!" style="background: url('/assets/images/carousel-2.jpg')">     
                <br><br><br><br><br><br><br><br>  
                <div class="card-panel home-card">   
                    <div class="card-content black-text">
                        <i class="fa fa-pie-chart" aria-hidden="true"></i>
                        <h3>soit {{ nbBikes }} motos ...</h3>                        
                    </div>
                </div> 
            </div>
            <div class="carousel-item green white-text" href="#three!" style="background: url('/assets/images/carousel-3.jpg')">
                <br><br><br><br><br><br><br><br>  
                <div class="card-panel home-card">   
                    <div class="card-content black-text"> 
                        <i class="fa fa-area-chart" aria-hidden="true"></i> 
                        <h3>dans pas moins de {{ nbCategs }} catégories !</h3>    
                    </div>
                </div> 
            </div>
        </div>
    `
})
export class CarouselComponent implements OnInit, AfterViewInit {

    private appService: AppService;

    public nbBikes: number;
    public nbCategs: number;
    public nbManufacturers: number;

    constructor(appService: AppService) {
        this.appService = appService;
    }

    ngOnInit() { 
        this.getNbBikes();
        this.getNbCategs();
        this.getNbManufacturers();
    }

    ngAfterViewInit() {
        $('.carousel.carousel-slider').carousel({full_width: true});
    }

    private getNbBikes(): void {
        this.appService.nbBikes().then(response => {
            try {
                this.nbBikes = response.json().nbBikes;                
            } catch (error) { }
        });
    } 

    private getNbCategs(): void {
        this.appService.nbCatgories().then(response => {
            try {
                this.nbCategs = response.json().nbCategs;                
            } catch (error) { }
        });
    } 

    private getNbManufacturers(): void {
        this.appService.nbManufacturers().then(response => {
            try {
                this.nbManufacturers = response.json().nbManufacturers;                
            } catch (error) { }
        });
    } 
}