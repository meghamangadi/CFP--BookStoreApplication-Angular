import { Injectable } from '@angular/core';
import {  CartModel } from 'src/app/Model/CartModel ';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject,Observable} from "rxjs";
 
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
 
  public search = new BehaviorSubject<string>("");
 
  private baseUrl  = "http://localhost:8085/cart"
  constructor(private http: HttpClient) { }
  getCartlist() {
    let userId = localStorage.getItem("userId");
    return this.http.get<any>(this.baseUrl + "/getAll" )
  }
  removeBook(id: number):Observable<any> {
    return this.http.delete(this.baseUrl+"/remove/"+id, {headers: new HttpHeaders({token: localStorage.token})})
  }

  removeBookAll():Observable<any> {
    return this.http.delete(this.baseUrl+"/removeAll", {headers: new HttpHeaders({token: localStorage.token})})
  }
  addToCartQuantity(cartId: number, quantity: number) {
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.GgoSYfqzLaauEcwAguIvHil0HjXsHGC_3sjWmvhrLKU';
   
    return this.http.put(this.baseUrl + "/update/"+cartId+"/"+quantity +"/", {headers: new HttpHeaders({token})});
  }
 
  addToCart(cartModel: CartModel) {
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.GgoSYfqzLaauEcwAguIvHil0HjXsHGC_3sjWmvhrLKU';
   
    return this.http.post(this.baseUrl+"/add",cartModel,{headers: new HttpHeaders({token})})
  }
}
