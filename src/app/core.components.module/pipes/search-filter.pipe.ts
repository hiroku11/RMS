import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item: any) => {
      for (let key in item) {
        if (typeof item[key] !== "object" && item[key].toString().indexOf(filter) > -1 ) {
          return true;
        }
      }
      return false;
    });
  }
}
