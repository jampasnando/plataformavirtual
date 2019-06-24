import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if(texto===''){
      return arreglo;
    }
    else{
      return arreglo.filter(item=>{
        texto=texto.toUpperCase();
        return item.unidad.toUpperCase().includes(texto);

      });
    }
  //  console.log(arreglo);
  //   return arreglo;
  }

}
