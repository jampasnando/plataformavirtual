import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class Tramite2Service {

  constructor(private httpClient2:HttpClient ) {}
  getTramite2(data:any):Observable<any>{
    var url2=GLOBAL.urlTramites2;
    const params:FormData=new FormData();
    params.append('gestion',data.gestion);
    params.append('number',data.ntramite);
    params.append('ci',data.carnet);
    // let params={
    //   'number':data.ntramite,
    //   "gestion":data.gestion,
    //   "ci":data.carnet
    // }
    console.log("enviando...: ",data);
    return this.httpClient2.post(url2,params);
  }
}
