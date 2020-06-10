import { Component, OnInit } from '@angular/core';
import {Login} from '../data-class'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newLogin: Login = {
    username: "",
    password: ""
  }

  login(){
    console.log("logging in");
    console.log(this.newLogin.username);
    console.log(this.newLogin.password);
  }
}
