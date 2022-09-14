import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})

export class TotalPipe implements PipeTransform {
  transform(value: any, tva?: boolean): number {
    // ici value = argument noté à gauche
    // console.log(value, 'depuis pipe total')
    // ici args correspond aux autres arguments passés au pipe
    // console.log(args, 'args depuis pipe total');
    // return ;
    // console.log('instancié')
      if(tva){
        return value.totalTTC();
      }
      return value.totalHT();
  }
}
