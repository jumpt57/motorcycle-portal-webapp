import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterManufacturer'
})
export class FilterManufacturerPipe implements PipeTransform {
    transform(items: any[], args: string): any {
        if (args != undefined) {
            return items.filter(item => 
                (item.name.toLowerCase() as string).substring(0, args.length) ==  args.toLowerCase().substring(0, args.length)
            );
        }
        else {
            return items;
        }
    }
}