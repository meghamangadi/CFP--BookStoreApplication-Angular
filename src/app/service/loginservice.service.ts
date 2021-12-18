import { Injectable } from '@angular/core';
import {UserLoginService} from "../entities/user-login.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private mainUrl  = "http://localhost:8085/user"

  constructor(private  httpClient : HttpClient) { }

  public loginBookStoreData(userLoginService : UserLoginService) : Observable<any>{
    return this.httpClient.post(`${this.mainUrl}/login`, UserLoginService)
  }
}
