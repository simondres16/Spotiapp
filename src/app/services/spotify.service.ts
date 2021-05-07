import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQC9mG4nxnUZqPlaNmnhznWb1-jY2kA6VJjsDF3yZVPeCiTKb1K2BDmvoSeZs3up5-fWVUnj_aM_xQ_Na1o'
    });
    return this.http.get( url , {headers} );
  }

  getNewRealises(){
    return this.getQuery("browse/new-releases").pipe( map( data =>{
      return data["albums"].items;
    }) );
  }

  searchArtist(termino:string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`).pipe( map( data =>{
      return data["artists"].items;
    }) );
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:String){
    return this.getQuery(`artists/${id}/top-tracks?country=CO`).pipe( map( data =>{
      return data["tracks"] }));
  }
}
