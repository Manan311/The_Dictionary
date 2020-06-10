import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import {
  termEnglish,
  termNonEnglish,
  Definition,
  Languages,
} from '../data-class';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-translation',
  templateUrl: './add-translation.component.html',
  styleUrls: ['./add-translation.component.css'],
})
export class AddTranslationComponent implements OnInit {
  constructor(
    private m: DataManagerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // 2020-03-14T00:00:00.000Z
    // this.termEnglish = {
    //   wordEnglish: '',
    //   wordNonEnglish: '',
    //   wordExpanded: '',
    //   languageCode: '',
    //   image: '',
    //   imageType: '',
    //   audio: '',
    //   audioType: '',
    //   linkAuthoritative: '',
    //   linkWikipedia: '',
    //   linkYouTube: '',
    //   authorName: '',
    //   dateCreated: this.date,
    //   dateRevised: this.date,
    //   fieldOfStudy: '',
    //   helpYes: 0,
    //   helpNo: 0,
    //   definitions: [
    //       this.d
    //   ]
    // };
  }

  id: string;
  d: Definition;
  date: string = new Date().toISOString();
  newDate = new Date(this.date);
  termEnglish: termEnglish;
  termNonEnglish: termNonEnglish;
  languages: Languages[];
  lang: string;
  langName: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.m.getOneTermsEnglishID(this.id).subscribe((response) => {
      // console.log(response);
      this.termEnglish = response;
    });

    this.m.getAllLanguages().subscribe((response) => {
      // console.log(response);
      this.languages = response;
    });
    // console.log(this.termNonEnglish)

    this.d = {
      authorName: '',
      dateCreated: this.newDate,
      definition: '',
      quality: 0,
      likes: 0,
    };

    this.termNonEnglish = {
      termEnglishId: this.id,
      wordEnglish: '',
      wordNonEnglish: '',
      wordExpanded: '',
      languageCode: '',
      image: '',
      imageType: '',
      audio: '',
      audioType: '',
      linkAuthoritative: '',
      linkWikipedia: '',
      linkYouTube: '',
      authorName: '',
      dateCreated: this.newDate,
      dateRevised: this.newDate,
      fieldOfStudy: '',
      helpYes: 0,
      helpNo: 0,
      definitions: [this.d],
    };
  }

  langChange(newObj) {
    console.log(this.lang);
  }

  createTranslation(): void {
    console.log('createTranslation()');
    this.d.authorName = this.termNonEnglish.authorName;
    this.termNonEnglish.definitions.push(this.d);
    this.termNonEnglish.definitions.pop();
    this.termNonEnglish.wordEnglish = this.termEnglish.wordEnglish;
    this.termNonEnglish.languageCode = this.lang;
    // console.log('English: ' + this.termNonEnglish.toString());
    // console.log(this.termNonEnglish.authorName);
    // console.log(this.termNonEnglish.wordNonEnglish);
    // console.log(this.termNonEnglish.fieldOfStudy);
    // console.log(this.termNonEnglish.definitions[0].authorName + 'eng');
    // console.log(this.termNonEnglish.definitions[0].dateCreated + 'eng');
    // console.log(this.termNonEnglish.definitions[0].definition + 'eng');
    // console.log(this.termNonEnglish.definitions[0].quality + 'eng');
    // console.log(this.termNonEnglish.definitions[0].likes + 'eng');
    // console.log(this.d.definition);

    this.m
      .addTermNonEnglish(this.termNonEnglish)
      .subscribe((r) => (this.termNonEnglish = r));

    setTimeout(() => {
      this.router.navigate([`/term/english/detail/${this.id}`]);
    }, 2000);
  }
}
