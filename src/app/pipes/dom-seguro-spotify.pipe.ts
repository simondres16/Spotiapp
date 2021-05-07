import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguroSpotify'
})
export class DomSeguroSpotifyPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer){}

  transform( value:string  ): any {
    const url = "https://open.spotify.com/embed/track/";    
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value.substring(14));
  }

}
