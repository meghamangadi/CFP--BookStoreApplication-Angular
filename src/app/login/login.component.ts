import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { LoginserviceService } from "../service/loginservice.service";
 
import { LoginModel } from "src/app/Model/LoginDto";
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 
  public bookStoreLoginFormGroup: FormGroup ;
  public loginModel: LoginModel = new LoginModel;
  constructor( private formBuilder: FormBuilder ,private loginserviceService:LoginserviceService, private router: Router) {

    this.bookStoreLoginFormGroup=this.formBuilder.group({
     email:new FormControl('',Validators.required),
     password:new FormControl('', Validators.required)
    
   });
     }

  ngOnInit(): void {
  }

  onSubmit(): void {

    
    this.loginModel=this.bookStoreLoginFormGroup.value;
   
     this.loginserviceService.loginBookStoreData(this.loginModel).subscribe((response: any)=>{
      
        
          this.router.navigate(["/dashboard"])
       
     });

  }
}