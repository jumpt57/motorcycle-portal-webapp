import { Component, Input,  trigger, state, style, transition, animate} from '@angular/core';

import { ManufacturerMin } from '../../../models/manufacturer-min';

@Component({
    selector: 'card-manufacturer',
    template: ` 
        <div [@imageState]="state" class="card small hoverable" [routerLink]="['/constructeurs', manufacturer.name]">
            <div class="card-image">
                <img class="responsive-img" [src]="manufacturer.logoUrl | imgUrl" (load)="loadEnd()">
            </div>
            <div class="card-content truncate">
                <span class="badge white-text red darken-2"><i class="fa fa-motorcycle" aria-hidden="true"></i> {{manufacturer.nbBikes}}</span>
            </div>
            <div class="card-action">
                <span class="red-text text-darken-4 truncate">{{manufacturer.name | uppercase}}</span>
            </div>
        </div> 
    `,
    animations: [
        trigger('imageState', [
            state('loading', style({
                opacity: 0
            })),
            state('done', style({
                opacity: 1
            })),
            transition('loading => done', animate('500ms ease-in')),            
            transition('done => loading', animate('500ms ease-out'))
        ])
    ]
})
export class CardManufacturerComponent {

    @Input() manufacturer: ManufacturerMin;

    state: any;

    constructor() {
        this.state = 'loading';
    }

    loadEnd(): void {
        this.state = 'done';
    }
}