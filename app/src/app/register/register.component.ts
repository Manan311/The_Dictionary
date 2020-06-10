import { Component, OnInit } from '@angular/core';
import {registerUser} from '../data-class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {}

  newUser: registerUser = {
    username: "",
    password: "",
    conformationPassword: "",
    email: ""
  };

  ngOnInit(): void {

  }

  register(){
    console.log("registering");
    console.log(this.newUser.username);
    console.log(this.newUser.password);
    console.log(this.newUser.conformationPassword);
    console.log(this.newUser.email);

  }
}
