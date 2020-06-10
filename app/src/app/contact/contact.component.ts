import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = "";
  last: string = "";
  email: string = "";

  constructor() {
    this.name = "Manan";
    this.last = "Patel";
    this.email = "mpatel296@myseneca.ca";
   }

  ngOnInit(): void {
  }

}
