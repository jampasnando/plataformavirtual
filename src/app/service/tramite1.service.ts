import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class Tramite1Service {

  constructor(private httpClient1:HttpClient) { }
  getTramite1(data:any):Observable<any>{
   var url1=GLOBAL.urlTramites1;
   var ntramite=data.ntramite;
   var carnet=data.carnet;
   url1=url1.concat(ntramite).concat('/').concat(carnet);
    // console.log("url1 es:",url1);
    return this.httpClient1.get(url1);
  }
}
