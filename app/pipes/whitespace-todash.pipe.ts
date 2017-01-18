import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'whitespaceTodashPipe'
})
export class WhitespaceTodashPipe implements PipeTransform {
    transform(value: string, args: any[]): any {
        return value.replace(' ', '-');
    }
}