import { Component, OnInit } from '@angular/core';
import {  BookModel } from 'src/app/Model/book-model';
import { Router } from "@angular/router";
import {  BookServiceService } from 'src/app/service/book-service.service';
import {CartModel} from 'src/app/Model/CartModel ';
import{CartServiceService} from 'src/app/service/cart-service.service'
@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  
  bookDetails: BookModel[] = [];

  public cartModel: CartModel = new CartModel;
  
  constructor(private bookServiceService: BookServiceService,private cartServiceService:CartServiceService, private route: Router) { }

  ngOnInit(): void {
    this.BookDetails();
  }

  BookDetails() {
     this.bookServiceService.getApiCall().subscribe(data => {
       this.bookDetails = data.object;
     })
  }
  addToCart(bookId: number ){
   this.cartModel.bookId=bookId;
   this.cartModel.quantity=1;
    console.log("cart deatils" +bookId  );
    
    this.cartServiceService.addToCart(this.cartModel).subscribe((response: any)=>{this.BookDetails();});
    
  }
  sortByPriceLowToHigh() {
    // this.bookService.sortByPriceLowToHigh().subscribe(data => {
    //   this.bookDetails = data
    // });
  }

  sortByPriceHighToLow() {
    // this.bookService.sortByPriceHighToLow().subscribe(data => {
    //   this.bookDetails = data;
    // })
  }

  /**
   * 
   * @param bookId 
   */
  goToBookDetails(bookId: number) {
    console.log("this is my id" + bookId)
    this.route.navigate(["book-details", bookId])
  }

  searchBook() {
    // this.bookService.searchBookByUserInput(this.bookService.searchTerm).subscribe(data => {
    //   console.log(data)
    // })

  }
}
