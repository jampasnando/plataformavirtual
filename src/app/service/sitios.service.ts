import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class SitiosService {

    constructor(private httpClient:HttpClient) {

    }
    getDeuda(data:any):Observable<any>{
      const params:FormData = new FormData();
      params.append('codigo_licencia',data.codigo_licencia);
      params.append('tipo',data.tipo);

      return this.httpClient.post<any>(GLOBAL.urlSitios,params);
    }
}
