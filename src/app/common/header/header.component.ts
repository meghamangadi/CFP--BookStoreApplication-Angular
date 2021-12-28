 
import {Router} from "@angular/router";
import {BookServiceService} from "../../service/book-service.service";
import {CartServiceService} from "../../service/cart-service.service";
import { BookModel } from 'src/app/Model/book-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  OnInit { bookName='';
public cartlist: any[] = []
public totalPrice: number = 0;
public markedPrice: number = 0;
@Input() fullDisplay:boolean;
public searchTerm: string ='';
@Output() searchEvent= new EventEmitter<String>(); 

constructor(public router:Router, public userService:UserService,public cartService: CartServiceService) {
  this.fullDisplay=true;
 }

ngOnInit(): void {
  this.reload();
}
search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
   this.cartService.search.next(this.searchTerm);
}

 
reload() {
  this.cartService.getCartlist().subscribe((n: any) => {
    this.cartlist = n.object
   for (let book of this.cartlist) {
     this.totalPrice = this.totalPrice + (book.quantity * book.book.bookPrice);
     this.markedPrice = this.markedPrice + (book.quantity * book.book.markedPrice);
     console.log("onit");
   console.log(this.markedPrice);
   }
 });
}
}
