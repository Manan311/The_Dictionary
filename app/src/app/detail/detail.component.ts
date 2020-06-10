import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { termEnglish, termNonEnglish, Definition, Languages } from '../data-class';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) {}

  id: string;
  termEnglish: termEnglish;
  termNonEnglish: termNonEnglish[];
  languages: Languages[];
  // termNonEnglish: termNonEnglish[];
  lks: number = undefined;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.m.getOneTermsEnglishID(this.id).subscribe((response) => {
      this.termEnglish = response;
      console.log(this.termEnglish.wordEnglish);
    });
    this.m.getAllTermsNonEnglish().subscribe((response) => {
      this.termNonEnglish = response;
    });
    this.m.getAllLanguages().subscribe((response) => {
      // console.log(response);
      this.languages = response;
    });
  }

  incrementYes() {
    console.log(this.id);
    this.m.englishIncrementYes(this.id).subscribe(r => this.termEnglish = r);;
    // console.log(this.termEnglish.definitions[0].likes)
    console.log(this.termEnglish.helpYes);
  }

  incrementNo() {
    console.log(this.id);
    this.m.englishIncrementNo(this.id).subscribe(r => this.termEnglish = r);;
    // console.log(this.termEnglish.definitions[0].likes)
    console.log(this.termEnglish.helpNo);
  }

  incrementLikes(id){
    console.log(id);
    this.m.englishIncrementLikes(id).subscribe(r => this.termEnglish = r);
    // console.log(this.termEnglish.definitions[0].likes)
    console.log(this.termEnglish.definitions[0].likes);
  }

  deleteTerm(){
    this.m.englishDelete(this.id).subscribe();
    setTimeout(()=>{this.router.navigate(['/term/english'])}, 2000 );
  }
}
