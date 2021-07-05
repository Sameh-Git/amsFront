import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixNg'
})
export class PrefixNgPipe implements PipeTransform {

  transform(value: string): string{
    return "Angular : "+value;
  }

}
