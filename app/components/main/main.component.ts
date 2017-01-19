import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
    selector: 'my-app',
    templateUrl: './app/components/main/main.component.html'
})
export class MainComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        $(document).ready(function () {
            ($(".button-collapse") as any).sideNav({
                menuWidth: 250,
                edge: 'left',
                closeOnClick: true
            });
        })
    }
}