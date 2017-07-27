import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bcEllipsis'
})
export class BcEllipsisPipe implements PipeTransform {

    transform(str: string, strLength: number = 250): any {
        const withoutHtml = str.replace(/(<([^>]+)>)/ig, '');

        if (str.length >= strLength) {
            return `${withoutHtml.slice(0, strLength)}...`;
        }

        return withoutHtml;
    }

}
