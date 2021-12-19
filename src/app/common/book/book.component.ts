import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BookModel } from "src/app/Model/book-model";
import { BookServiceService } from "src/app/service/book-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import { CartServiceService } from "src/app/service/cart-service.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  private id!: number;
  book = new BookModel();

  constructor(private activatedRoute: ActivatedRoute, private bookServiceService: BookServiceService ,private snackBar : MatSnackBar, private cartServiceService : CartServiceService) {
  }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["bookId"];
    console.log("this is id: " + this.id)
    this.loadBook(this.id)
  }

/**
 * 
 * @param id 
 */
  loadBook(id: number) {
    // this.bookServiceService.getBookById(id).subscribe(data => {
    //   console.log(data)
    //   this.book = data.data;
    // })
  }

  
  addToBag() {
    // console.log(this.id);
    // this.cartServiceService.addToCart(this.id).subscribe(data => {
    //   console.log(data)
    //   if (data != null){
    //     this.snackBar.open("Book has been added to your bag " ,"Dismiss")._dismissAfter(4000)
    //   }
    // })

  }

  addToWishlist() {
    // console.log(this.id);
    // this.wishListService.addToWishList(this.id).subscribe(data => {
    //   console.log(data);
    //   if (data != null){
    //     this.snackBar.open("Book has been added to your wishlist " ,"Dismiss")._dismissAfter(4000)
    //   }
    // })
  }

}
