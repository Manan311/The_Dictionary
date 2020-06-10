import { Component, OnInit, Input } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { termEnglish } from '../data-class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-termenglish',
  templateUrl: './termenglish.component.html',
  styleUrls: ['./termenglish.component.css'],
})
export class TermenglishComponent implements OnInit {
  constructor(private m: DataManagerService, private router: Router) {
  }

  termEnglish: termEnglish[];
  termEnglishSearch: termEnglish[];
  searchString: string = "";

  ngOnInit(): void {
    this.m.getAllTermsEnglish().subscribe((response) => {
      this.termEnglish = response;
    });
  }

  doSearch(): void{
    this.termEnglishSearch = [];
    // console.log(this.searchString+ "" + this.termEnglish.length)
    if(this.searchString.length >= 3){
    for(let i in this.termEnglish){
      // console.log(i +" "+ this.termEnglish[i].wordEnglish)
      if(this.termEnglish[i].wordEnglish.toLowerCase().includes(this.searchString.toLowerCase())){
        // console.log("includes "+this.termEnglish[i].wordEnglish)
        this.termEnglishSearch.push(this.termEnglish[i]);
        // console.log(this.termEnglishSearch);
      }
    }
  }

  }
}
