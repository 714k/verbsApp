import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortByTitle'})
export class SortByTitle implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {
    if (typeof array !== 'undefined') {
      array.sort((a: any, b: any) => {
        if (a.title) {
          // console.log('a: ', a.title);
          if (a.title < b.title) {
            return -1;
          } 
          else if (a.title > b.title) {
            return 1;
          }
          else {
            return 0;
          }
        }
      });

      return array;
    }
  }
}

@Pipe({name: 'capitalize'})
export class Capitalize implements PipeTransform {
  transform(text: string):string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}