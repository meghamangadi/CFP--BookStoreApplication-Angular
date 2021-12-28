import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {BookServiceService} from 'src/app/service/book-service.service';
import {CartServiceService} from 'src/app/service/cart-service.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  booksList: any[] = [] ;

  hideButton: boolean = false;

  userId : any = localStorage.getItem('userId') ;

  body : any;


 public searchTerm: any = '';

 
 itemExists : number [] = [];

  constructor(private cartServiceService:CartServiceService,private bookServiceService: BookServiceService , private router: Router,  private matSnackBar: MatSnackBar) { }
  ngOnInit(): void {

    this.getAllBooks();
   
     
    this.cartServiceService.search.subscribe(val => {
      
      this.searchTerm = val
    });
   
   
  }

  getAllBooks() {
    this.bookServiceService.getApiCall().subscribe(data => {
      this.booksList = data.object;
    })
    
    
  }

  onClick(id: number) {
    console.log("Helloooooo",id)
 this.hideButton = true;
    this.body = ({ "userId" : this.userId, "bookId" : id ,
  "quantity" : 1});

  this.cartServiceService.addToCart(this.body).subscribe(response  => {
    
    if( id && !this.itemExists.includes(id)){

      console.log("Helloooooo",id)
      this.itemExists.push(id);
    }
  });
  this.matSnackBar.open('Book added successfully Into Cart' , 'ok', {
    duration: 5000
  });
  this.router.navigate(['header'])
   this.router.navigate(['dashboard'])
}
getUpdatedNotes(event) {
  this.ngOnInit();
  }



}
