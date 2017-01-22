import { Component, OnInit, AfterContentInit, AfterViewInit, ElementRef} from '@angular/core';

@Component({
    selector: 'carousel',
    template: `
        <div class="carousel carousel-slider center" data-indicators="true" style="max-height: 500px;">           
            <div class="carousel-item black-text" href="#one!" style="background: url('/assets/images/carousel-1.jpg')">
                <h2>First Panel</h2>
                <p class="black-text">This is your first panel</p>
            </div>
            <div class="carousel-item amber white-text" href="#two!" style="background: url('/assets/images/carousel-2.jpg')">
                <h2>Second Panel</h2>
                <p class="white-text">This is your second panel</p>
            </div>
            <div class="carousel-item green white-text" href="#three!" style="background: url('/assets/images/carousel-3.jpg')">
                <h2>Third Panel</h2>
                <p class="white-text">This is your third panel</p>
            </div>
             <div class="carousel-item green white-text" href="#three!" style="background: url('/assets/images/carousel-4.jpg')">
                <h2>Fourth Panel</h2>
                <p class="white-text">This is your fourth panel</p>
            </div>
        </div>
    `
})
export class CarouselComponent implements OnInit, AfterContentInit, AfterViewInit {

    constructor(private el: ElementRef) { }

    ngOnInit() { }

    ngAfterContentInit() { }

    ngAfterViewInit() {
        $('.carousel.carousel-slider').carousel({full_width: true});
    }
}