import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ 
    selector: '[card]'
})
export class CardDirective {

    constructor(el: ElementRef) {
        console.dir(el.nativeElement)
    }

}
