import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {
  @Input() items : any[];
  constructor( private router:Router) { }

  ngOnInit() {
  }

  verArtista(item:any){
    let artistaID;

    if (item.type==='artist') {
        artistaID = item.id;
    } else {
        artistaID = item.artists[0].id;
    }

    this.router.navigate(['/artist' , artistaID]);
    console.log(artistaID);
  }

}
