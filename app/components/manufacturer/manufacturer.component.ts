import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AppService } from '../../services/app.service';

import { Category } from '../../models/category';

@Component({
    selector: 'manufacturer',
    templateUrl: './app/components/manufacturer/manufacturer.component.html'
})
export class ManufacturerComponent implements OnInit {
    public categories: Array<Category>;
    public manufacturer: any;
    public selectedyear: string;
    public selectedCategory: Category;
    public seeAll: boolean;

    constructor(private appService: AppService,
        private route: ActivatedRoute) {
        this.seeAll = false;
    }

    /**
     * Au démarrage de la page
     */
    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.getManufacturer(params['name']);
            this.getCategories();
        });
    }

    /**
     * Récupère le fabriquant
     */
    private getManufacturer(name: string): void {
        this.appService.getManufacturerByName(name)
            .then(response => {
                this.manufacturer = response.json();
                this.selectedyear = this.manufacturer.years[0];
                this.getManufacturerBikesByNameAndYear(this.manufacturer.name, this.selectedyear);
            });
    }

    /**
     * Récupère les motos par le nom du fabriquant et l'année de fabrication
     */
    private getManufacturerBikesByNameAndYear(name: string, year: string): void {
        this.appService.getManufacturerBikesByNameAndyear(this.manufacturer.name, this.selectedyear, this.selectedyear)
            .then(response => {
                try {
                    response = response.json();
                    if (response != undefined && response.bikes != undefined) {
                        this.manufacturer.bikes = response.bikes;
                    }
                } catch (error) { }
            });
    }

    /**
     * Récupère toutes les motos d'un fabriquant par son nom
     */
    private getManufacturerBikesByName(name: string): void {
        this.appService.getManufacturerBikesByName(this.manufacturer.name)
            .then(response => {
                try {
                    response = response.json();
                    if (response != undefined && response.bikes != undefined) {
                        this.manufacturer.bikes = response.bikes;
                    }
                } catch (error) { }
            });
    }

     /**
     * Récupère les catégories de fabrication
     */
    public getCategories(): void {
        this.appService.getCategories().then(response => {
            this.categories = (response.json() as Array<Category>)
        });
    }

    /**
     * Permet de chercher le changement d'année de fabrication
     */
    public changeYear(value: string): void {
        this.seeAll = false;
        this.selectedyear = value;        
        if (this.manufacturer.bikes != undefined) {
            this.manufacturer.bikes = undefined;
        }
        this.getManufacturerBikesByNameAndYear(this.manufacturer.name, this.selectedyear);
    }

    /**
     * Voir toutes les motos
     */
    public changeSeeAll(value: string): void {
        this.seeAll = !this.seeAll;
        if (this.seeAll) {
            if (this.manufacturer.bikes != undefined) {
                this.manufacturer.bikes = undefined;
            }
            this.getManufacturerBikesByName(this.manufacturer.name);
        }
        else {
            this.changeYear(this.selectedyear);
        }
    }

    /**
     * Sélection d'une catégorie particulière
     */
    public changeCategory(value: any): void {
        this.selectedCategory = value;
    }
}