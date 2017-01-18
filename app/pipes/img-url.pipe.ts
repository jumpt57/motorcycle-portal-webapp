import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {
    transform(value: string, args: any[]): string {
        return 'http://localhost:3000' + value;
    }
}