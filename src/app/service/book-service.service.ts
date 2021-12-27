import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor( private http:HttpClient ) { }
  private mainUrl  = "http://localhost:8085/book"
  getApiCall():Observable<any>{
    return this.http.get<any>(`${this.mainUrl}/getAllBook`);
  }

 
}
