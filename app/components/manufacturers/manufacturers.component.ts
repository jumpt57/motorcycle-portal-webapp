import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../../services/app.service';

import { ManufacturerMin } from '../../models/manufacturer-min';

/**
 * Component that manage the list of manufacturers view
 */
@Component({
    selector: 'manufacturers',
    templateUrl: './app/components/manufacturers/manufacturers.component.html'
})
export class ManufacturersComponent implements OnInit, AfterViewInit {
    private appService: AppService;
    private router: Router;

    public manufacturers: Array<ManufacturerMin>;

    constructor(appService: AppService, router: Router) {
        this.appService = appService;
        this.router = router;
    }

    public ngOnInit(): void {
        this.getManufacturers();
    }

    public ngAfterViewInit(): void {
    }

    private getManufacturers() {
        this.appService.allManufacturers().then(response => {
            this.manufacturers = response.json() as Array<ManufacturerMin>;
        });
    }
}