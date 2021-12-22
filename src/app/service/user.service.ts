import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl  = "http://localhost:8085/cart"

  constructor(private http: HttpClient) { }


  generateToken(credentials: any) {
    return this.http.post(this.baseUrl + "/token", credentials)
  }

  loginUser(token: any) {
    localStorage.setItem("token", token)
    this.getUserByToken().subscribe((n: any) => {
      localStorage.setItem("userId", n.data.id.toString());
      localStorage.setItem("userName", n.data.fullName);
    })
    return true
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == null || token === "") {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")
    return true;
  }

  getToken() {
    return localStorage.getItem("token")
  }

  getUserByToken() {
    let token = localStorage.getItem("token")
    return this.http.get<any>(this.baseUrl + "/id/" + token)
  }

  
 

 

 
}
