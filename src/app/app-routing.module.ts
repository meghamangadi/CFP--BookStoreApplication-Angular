import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../app/common/dashboard/dashboard.component';
import { BookComponent } from '../app/common/book/book.component';
import { AllBooksComponent } from '../app/common/all-books/all-books.component';
import { CartComponent } from '../app/common/cart/cart.component';
const routes: Routes = [
  {
    path:'', redirectTo:'register',pathMatch:'full'
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