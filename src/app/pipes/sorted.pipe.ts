import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted',
  pure: false
})
export class SortedPipe implements PipeTransform {

  transform(value: any, sortString: string): any {
    
    return value.sort((a, b) => {
     
      if (a[sortString] < b[sortString]) {
        return -1
      }
      if (a[sortString] > b[sortString]) {
        return 1;
      }
      return 0;
    });
    
  }

}
