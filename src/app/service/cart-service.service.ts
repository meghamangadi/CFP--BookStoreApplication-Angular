import { Injectable } from '@angular/core';
import {  CartModel } from 'src/app/Model/CartModel ';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
 

  private baseUrl  = "http://localhost:8085/cart"
  constructor(private http: HttpClient) { }
  getCartlist() {
    let userId = localStorage.getItem("userId");
    return this.http.get<any>(this.baseUrl + "/getAll" )
  }
}
