import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any[] = [];
  topTracks:any[] = [];
  loading:boolean;

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {
    this.loading= true;
    this.router.params.subscribe( data => {
      //console.log(data["id"]);
      this.getArtista(data["id"]);
      this.getTopTracks(data["id"]);

    })
  }

  getArtista(id:string){
    this.spotify.getArtist(id).subscribe(( artista:any )=>{
      //console.log(artista);
      this.artista = artista;
      this.loading= false;
    });
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe((topTracks:any )=>{
      console.log(topTracks);
      this.topTracks = topTracks;
      //this.loading= false;
    });
  }


}
