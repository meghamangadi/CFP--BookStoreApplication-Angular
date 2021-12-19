import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { LoginserviceService } from "../service/loginservice.service";
import { UserLoginService } from "../entities/user-login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public userLoginService: UserLoginService = new UserLoginService;
  public bookStoreLoginFormGroup: FormGroup ;

  constructor( private formBuilder: FormBuilder ,private loginserviceService:LoginserviceService, private router: Router) {

    this.bookStoreLoginFormGroup=this.formBuilder.group({
     email:new FormControl('',Validators.required),
     password:new FormControl('', Validators.required)
    
   });
     }

  ngOnInit(): void {
  }

  onSubmit(): void {

  //  this.userLoginService = this.bookStoreLoginFormGroup.value;
  //  console.log(this.userLoginService)
     this.loginserviceService.loginBookStoreData( this.bookStoreLoginFormGroup.value).subscribe((response: any)=>{
       console.log(response);
      //  setTimeout(() => {
      //    this.router.navigateByUrl("/login")
      //  }, 100000000);
     });

  }
}