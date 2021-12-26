import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient , HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from "@angular/material/core";
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { MatExpansionPanelModule, MatExpansionPanelHeaderModule, MatExpansionPanelTitleModule, MatAccordionModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs'; 
import { HeaderComponent } from '../app/common/header/header.component'; 
import { DashboardComponent } from '../app/common/dashboard/dashboard.component';
import { BookComponent } from './common/book/book.component';
import { AllBooksComponent } from './common/all-books/all-books.component';
import { CartComponent } from 'src/app/common/cart/cart.component';
import { FooterComponent } from './common/footer/footer.component';
import { OrderGreetingComponent } from './common/order-greeting/order-greeting.component';

 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent ,
    HeaderComponent,
    DashboardComponent,
    BookComponent,
    AllBooksComponent,
    CartComponent,
    FooterComponent,
    OrderGreetingComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,   
    MatFormFieldModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDividerModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }