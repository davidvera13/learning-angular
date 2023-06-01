import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, prop: string): any {
    return value.sort((valA: any, valB: any) => {
      if(valA[prop] > valB[prop])
        return 1;
      return -1;
    });
  }

}
