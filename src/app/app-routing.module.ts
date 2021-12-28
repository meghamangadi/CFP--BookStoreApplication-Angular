import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../app/common/dashboard/dashboard.component';
import { BookComponent } from '../app/common/book/book.component';
import { AllBooksComponent } from '../app/common/all-books/all-books.component';
import { CartComponent } from '../app/common/cart/cart.component';
import { OrderGreetingComponent } from '../app/common/order-greeting/order-greeting.component';
const routes: Routes = [
  {
    path:'',  component:RegisterComponent
  },
{
  path:'login', component:LoginComponent
},
{
  path:'register', component:RegisterComponent
},
{
  path:'dashboardExample', component:DashboardComponent
},
{
  path:'book', component:BookComponent
},
{
  path:'dashboard', component:AllBooksComponent
},
{
  path:'cart', component:CartComponent
},
{
  path:'greeting', component:OrderGreetingComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {

  ngOnInit(): void {
  }



 }