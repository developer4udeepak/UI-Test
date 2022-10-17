import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://dev.greenkoncepts.com/gktest/';
  [x: string]: any;
  

  constructor(private _http: HttpClient) { }
  //POST request
  

   postCustomerData(data:any ) {
     return this._http.post<any>(this.baseUrl, data).pipe(map((res:any)=>{
       return res;
     }))
   }
  getUser(userObj:any){

    return this._http.get<any>(this.baseUrl+`login?username=${userObj.name}&password=${userObj.password}`,).pipe(map((res:any)=>{
      return res;
    }));
  }

  }



