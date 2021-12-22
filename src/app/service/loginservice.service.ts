import { Injectable } from '@angular/core';
 
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { LoginModel } from "src/app/Model/LoginDto";
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private mainUrl  = "http://localhost:8085/user"
  private header={headers:new Headers({'Content-Type':'application/json'})};

  constructor(private  httpClient : HttpClient) { }

  
  public loginBookStoreData(loginModel : LoginModel) : Observable<any>{

   
    return this.httpClient.post<any>(`${this.mainUrl}/login`,loginModel)
  }
}
 