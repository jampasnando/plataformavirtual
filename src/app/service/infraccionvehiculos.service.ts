import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class InfraccionvehiculosService {

  constructor(private httpClient:HttpClient) { }
  getInfraccion(data:any):Observable<any>{
    var urlpta=GLOBAL.urlPTA;
    // var pta=data;
    const params:FormData=new FormData();
    params.append('pta',data);
    return this.httpClient.post(urlpta,params);
  }
}
