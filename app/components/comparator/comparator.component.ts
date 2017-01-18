import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
    selector: 'comparator',
    templateUrl: './app/components/comparator/comparator.component.html',
    styleUrls: ['./app/components/comparator/product-table.component.css']
})
export class ComparatorComponent implements OnInit {
    public manufacturers: any;
    public bikes: any;
    public bikesToCompare: any[];

    public selectedManufacturer: any;
    public showAddButton: boolean;


    public selectManufacturerTarget: any;
    public selectYearTarget: any;
    public selectBikeTarget: any;

    constructor(private appService: AppService) { }

    public ngOnInit(): void {
        this.getAllManufacturers();
    }

    private getAllManufacturers(): void {
        this.appService.allManufacturers().then(response => {
            this.manufacturers = response.json();
        });
    }

    public onManufacturerChange(target: any): void {
        this.selectManufacturerTarget = target;
        this.appService.getManufacturerById(target.value).then(response => {
            this.selectedManufacturer = response.json();
        });
    }

    public onManuYearChange(target: any): any {
        this.selectYearTarget = target;
        this.appService.getManufacturerBikesByNameAndyear(this.selectedManufacturer.name, target.value, target.value)
            .then(response => {
                try {
                    this.bikes = response.json().bikes;
                } catch (error) { }
            });
    }

    public onBikeChange(target: any): void {
        this.selectBikeTarget = target;
        this.showAddButton = true;
    }

    public onClickAddBike(): void {
        this.appService.getBikeById(this.selectBikeTarget.value).then(response => {
            if (this.bikesToCompare == undefined) {
                this.bikesToCompare = new Array<any>();
            }

            this.bikesToCompare.push(response.json());
        });
        this.selectBikeTarget.value = '';
        this.selectManufacturerTarget.value = '';
        this.selectYearTarget.value = '';
        this.showAddButton = false;
    }

}