import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  
  constructor(private httpClientPersonal:HttpClient) { }
  obtieneLista(data:any):Observable<any>{
    var url=GLOBAL.urlListaPersonal;
    return this.httpClientPersonal.post(url,'');
  }
}
