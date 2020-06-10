import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { termEnglish, Definition } from '../data-class';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-add-new-term',
  templateUrl: './add-new-term.component.html',
  styleUrls: ['./add-new-term.component.css'],
})
export class AddNewTermComponent implements OnInit {
  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) {}

  d: Definition;
  date = new Date().toISOString();
  newDate = new Date(this.date);
  termEnglish: termEnglish;
  redirecttermEnglish: termEnglish;


  ngOnInit(): void {

        this.d = {
        authorName: '',
        dateCreated: this.newDate,
        definition: '',
        quality: 0,
        likes: 0,
      }

      
    this.termEnglish = {
        wordEnglish: '',
        wordNonEnglish: '',
        wordExpanded: '',
        languageCode: 'en-ca',
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
        definitions: [
            this.d
        ]
      };

    // console.log(this.termNonEnglish)
  }

  createTerm(): void {
    console.log('createTranslation()');
    this.d.authorName = this.termEnglish.authorName;
    this.termEnglish.definitions.push(this.d);
    this.termEnglish.definitions.pop();

    // console.log('English: ' + this.termEnglish.toString());
    // console.log(this.termEnglish.authorName);
    // console.log(this.termEnglish.wordEnglish);
    // console.log(this.termEnglish.fieldOfStudy);
    // console.log(this.termEnglish.definitions[0].authorName + "eng");
    // console.log(this.termEnglish.definitions[0].dateCreated + "eng");
    // console.log(this.termEnglish.definitions[0].definition + "eng");
    // console.log(this.termEnglish.definitions[0].quality + "eng");
    // console.log(this.termEnglish.definitions[0].likes + "eng");

    console.log("Adding");
    this.m.addTermEnglish(this.termEnglish).subscribe(r => this.termEnglish = r);
    console.log("Added");
    this.m.getOneTermsEnglishWord(this.termEnglish.wordEnglish).subscribe(r => this.redirecttermEnglish = r);
    console.log("<"+this.redirecttermEnglish._id)+">";
    setTimeout(()=>{this.router.navigate(['/term/english/detail',{id:this.redirecttermEnglish._id}])}, 2000 );
  }
}
