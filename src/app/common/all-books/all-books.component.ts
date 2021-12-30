import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/Model/book-model';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookServiceService } from 'src/app/service/book-service.service';
import { CartModel } from 'src/app/Model/CartModel ';
import { CartServiceService } from 'src/app/service/cart-service.service'
@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  public searchTerm: any = '';
  bookDetails: BookModel[] = [];

  hideButton: boolean = false;

  userId: any = localStorage.getItem('userId');

  body: any;

  itemExists: number[] = [];
  public cartModel: CartModel = new CartModel;

  constructor(private bookServiceService: BookServiceService, private cartServiceService: CartServiceService, private route: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.BookDetails();

    this.cartServiceService.search.subscribe(val => {

      this.searchTerm = val
    });
  }

  BookDetails() {
    this.bookServiceService.getApiCall().subscribe(data => {
      this.bookDetails = data.object;
    })
  }
  addToCart(bookId: number) {
    this.cartModel.bookId = bookId;
    this.cartModel.quantity = 1;
    this.hideButton = true;
    console.log("cart deatils" + bookId);

    //  this.cartServiceService.addToCart(this.cartModel).subscribe((response: any)=>{this.BookDetails();});
    ///


    this.cartServiceService.addToCart(this.cartModel).subscribe(response => {

      if (bookId && !this.itemExists.includes(bookId)) {

        console.log("Helloooooo", bookId)
        this.itemExists.push(bookId);
      }
    });
    this.matSnackBar.open('Book added to your Cart successfully...!!', 'ok', {
      duration: 5000
    });
    this.route.navigate(['header'])
    this.route.navigate(['dashboard'])

  }
  sortByPriceLowToHigh() {

  }

  sortByPriceHighToLow() {

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

  }
}
