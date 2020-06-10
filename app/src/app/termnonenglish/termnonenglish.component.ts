import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { termNonEnglish } from '../data-class';

@Component({
  selector: 'app-termnonenglish',
  templateUrl: './termnonenglish.component.html',
  styleUrls: ['./termnonenglish.component.css'],
})
export class TermnonenglishComponent implements OnInit {
  constructor(private m: DataManagerService) {}

  termNonEnglish: termNonEnglish[];
  termNonEnglishSearch: termNonEnglish[];
  searchString: string = '';

  ngOnInit(): void {
    console.log('inInit');
    this.m.getAllTermsNonEnglish().subscribe((response) => {
      console.log(response);
      this.termNonEnglish = response;
    });
  }

  doSearch(): void {
    this.termNonEnglishSearch = [];
    // console.log(this.searchString+ "" + this.termNonEnglish.length)
    if (this.searchString.length >= 3) {
      for (let i in this.termNonEnglish) {
        // console.log(i +" "+ this.termNonEnglish[i].wordEnglish)
        if (
          this.termNonEnglish[i].wordEnglish
            .toLowerCase()
            .includes(this.searchString.toLowerCase())
        ) {
          // console.log("includes "+this.termNonEnglish[i].wordEnglish)
          this.termNonEnglishSearch.push(this.termNonEnglish[i]);
          // console.log(this.termNonEnglishSearch);
        }
      }
    }
  }
}
