 
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

@Input() fullDisplay:boolean;

@Output() searchEvent= new EventEmitter<String>(); 

constructor(public router:Router, public userService:UserService) {
  this.fullDisplay=true;
 }

ngOnInit(): void {
}

 
}
