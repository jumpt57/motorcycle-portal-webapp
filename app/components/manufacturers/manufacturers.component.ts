import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../../services/app.service';

@Component({
    selector: 'manufacturers',
    templateUrl: './app/components/manufacturers/manufacturers.component.html'
})
export class ManufacturersComponent implements OnInit {
    public manufacturers: Array<any>;

    constructor(private appService: AppService, private router: Router) {
    }

    ngOnInit() {
        this.getManufacturers();
    }

    getManufacturers() {
        this.appService.allManufacturers().then(response => {
            this.manufacturers = response.json();
        });
    }
}