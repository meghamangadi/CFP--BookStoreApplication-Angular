import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRegisterService} from "../entities/user-register.service";
@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {


  private mainUrl  = "http://localhost:8085/user"

  constructor( private  httpClient : HttpClient) { }

  public registerBookStoreData(userRegisterService : UserRegisterService) : Observable<any>{
    return this.httpClient.post(`${this.mainUrl}/register`, userRegisterService)
  }
}
