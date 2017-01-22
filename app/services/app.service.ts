import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    private static SERVER_URL: string = 'http://localhost:3000/api';

    constructor(private http: Http) { }

    nbBikes(): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/bikes/count`)
            .toPromise();
    }

    nbCatgories(): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/categories/count`)
            .toPromise();
    }

    nbManufacturers(): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/manufacturers/count`)
            .toPromise();
    }

    allManufacturers(): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/manufacturers`)
            .toPromise();
    }

    getManufacturerById(id: number): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/manufacturers/id/${id}`)
            .toPromise();
    }

    getManufacturerByName(name: string): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/manufacturers/name/${name}`)
            .toPromise();
    }

    getManufacturerBikesByName(name: string): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/manufacturers/name/${name}/bikes`)
            .toPromise();
    }

    getManufacturerBikesByNameAndyear(name: string, yearMin: string, yearMax: string): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/manufacturers/name/${name}/bikes/${yearMin}/${yearMax}`)
            .toPromise();
    }

    getBikeById(id: number): Promise<any>{
        return this.http
            .get(`${AppService.SERVER_URL}/bikes/${id}`)
            .toPromise();
    }

    getBikesByName(name: string): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/bikes/name/${name}`)
            .toPromise();
    }

    getBikeByNameAndYear(name: string, year:string): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/bikes/${name}/${year}`)
            .toPromise();
    }

    getBikeAdsByNameYearMinAndYearMax(name: string, yearMin: string, yearMax: string): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/lbc/${name}/${yearMin}/${yearMax}`)
            .toPromise();
    }

    getCategories(): Promise<any> {
        return this.http
            .get(`${AppService.SERVER_URL}/categories`)
            .toPromise(); 
    }
}