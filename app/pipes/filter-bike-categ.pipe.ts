import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBikeCateg'
})
export class FilterBikeCategPipe implements PipeTransform {
    transform(items: any[], args: string): any {
        if (args != undefined) {
            if (args == 'all') {
                return items;
            }
            else {
                return items.filter(item =>
                    (item.category.name.toLowerCase() as string) == args.toLowerCase()
                );
            }
        }
        else {
            return items;
        }
    }
}