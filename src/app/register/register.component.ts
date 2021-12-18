import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRegisterService} from  "../entities/user-register.service";
import {RegisterserviceService} from  "../service/registerservice.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent   {
  public userRegisterService: UserRegisterService = new UserRegisterService;
  public bookStoreFormGroup: FormGroup ;

  public   kyc;
	public  dateOfBirth;
	public  updatedDate;
	public registerDate;
  constructor( private formBuilder: FormBuilder ,private registerserviceService:RegisterserviceService, private router: Router) {

 this.bookStoreFormGroup=this.formBuilder.group({
  name:new FormControl(''),
  mobileNumber :new FormControl(''),
  email:new FormControl(''),
  password:new FormControl('')
});
  }

onSubmit(): void {

  this.userRegisterService = this.bookStoreFormGroup.value;
  console.log(this.userRegisterService)
  this.registerserviceService.addAddressBookData(this.userRegisterService).subscribe((response: any)=>{
    console.log(response);
    setTimeout(() => {
      this.router.navigateByUrl("/login")
    }, 1000);
  });
  

}

}