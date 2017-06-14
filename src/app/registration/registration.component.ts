import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newuser = new User()
  confirmedUser: User
  submitted: boolean = false;

  constructor() {
    console.log(this.newuser);
   }

  ngOnInit() {
  }
  makeNewUser(form){
    if(!form.valid){
      return
    }
    if(this.newuser.password !== this.newuser.confirmpw){
      return;
    }
    this.submitted = true;
    this.confirmedUser = this.newuser;
    this.newuser = new User();
    form.resetForm();


    console.log("Making a new user!", this.newuser)

  }

}
