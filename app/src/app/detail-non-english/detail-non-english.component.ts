import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import {
  termEnglish,
  termNonEnglish,
  Definition,
  Languages,
} from '../data-class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-non-english',
  templateUrl: './detail-non-english.component.html',
  styleUrls: ['./detail-non-english.component.css'],
})
export class DetailNonEnglishComponent implements OnInit {
  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) {}

  id: string;
  termNonEnglish: termNonEnglish;
  languages: Languages[];
  lang: string;
  newDate: Date;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.m.getOneTermsNonEnglishID(this.id).subscribe((response) => {
      this.termNonEnglish = response;
      console.log(this.termNonEnglish.wordEnglish);
    });


    this.m.getAllLanguages().subscribe((response) => {
      console.log(this.termNonEnglish.languageCode);
      for (let i = 0; i < response.length; i++) {
        // console.log(this.termNonEnglish.languageCode + ' = ' + response[i].code);
        if (this.termNonEnglish.languageCode.includes(response[i].code)) {
          this.lang = response[i].name;
        }
      }
      // console.log('aaaaaaaaaaaaaaaaaaaa' + this.lang);
      this.languages = response;
    });

    }

  incrementYes() {
    console.log(this.id);
    this.m
      .nonEenglishIncrementYes(this.id)
      .subscribe((r) => (this.termNonEnglish = r));
    // console.log(this.termNonEnglish.definitions[0].likes)
    console.log(this.termNonEnglish.helpYes);
  }

  incrementNo() {
    console.log(this.id);
    this.m
      .nonEnglishIncrementNo(this.id)
      .subscribe((r) => (this.termNonEnglish = r));
    // console.log(this.termNonEnglish.definitions[0].likes)
    console.log(this.termNonEnglish.helpNo);
  }

  incrementLikes(id) {
    console.log(id);
    this.m
      .nonEenglishIncrementLikes(id)
      .subscribe((r) => (this.termNonEnglish = r));
    // console.log(this.termNonEnglish.definitions[0].likes)
    console.log(this.termNonEnglish.definitions[0].likes);
  }

  deleteTerm(){
    this.m.nonEnglishDelete(this.id).subscribe();
    setTimeout(()=>{this.router.navigate(['/term/english'])}, 2000 );
  }
}
