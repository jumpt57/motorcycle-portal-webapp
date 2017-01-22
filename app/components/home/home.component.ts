import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
    selector: 'home',
    templateUrl: './app/components/home/home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() {
        /*$(document).ready(function () {
            $('.carousel.carousel-slider').carousel({ full_width: true });
        })*/
    }

    ngOnInit() { }
}