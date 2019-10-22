import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'removeWhiteSpaces'
})
export class RemoveWhiteSpacesPipe implements PipeTransform {
  transform(value: string, args?: any[]): any {
    return value.replace(/ /g, '');
  }
}
