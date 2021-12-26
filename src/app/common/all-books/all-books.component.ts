import { Component, OnInit } from '@angular/core';
import {  BookModel } from 'src/app/Model/book-model';
import { Router } from "@angular/router";
import {  BookServiceService } from 'src/app/service/book-service.service';
@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  
  bookDetails: BookModel[] = [];

  constructor(private bookServiceService: BookServiceService, private route: Router) { }

  ngOnInit(): void {
    this.BookDetails();
  }

  BookDetails() {
     this.bookServiceService.getApiCall().subscribe(data => {
       this.bookDetails = data.object;
     })
  }
  addToCart(bookId: number){

    
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
