import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'card-bike',
    template: `
        <div [@imageState]="state" class="card small hoverable" [routerLink]="['/moto', bike.year, bike.name]">
            <div class="card-image">
                <img class="responsive-img" [src]="bike.imagesUrl[0] | imgUrl"  style="height: 149px;" (load)="loadEnd()">
            </div>
            <div class="card-content">
                <p>{{bike.category.name}} - {{bike.year}}</p>
            </div>
            <div class="card-action">                                
                <span class="red-text text-darken-4 truncate" >{{bike.name}}</span>
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
export class CardBikeComponent {
    @Input() bike: any;

    state: any;

    constructor() {
        this.state = 'loading';
    }

    loadEnd(): void {
        this.state = 'done';
    }
}