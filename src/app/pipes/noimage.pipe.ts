import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[]): string {
    let ruta:string;
    if(!images){
      ruta = "assets/img/noimage.png"
    } else {
      if(images.length > 0) {
        ruta = images[0].url;
      } else {
        ruta = "assets/img/noimage.png"
      }
    }
    return ruta;
  }

}
