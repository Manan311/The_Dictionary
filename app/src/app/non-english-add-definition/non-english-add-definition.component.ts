import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { termNonEnglish, Definition } from '../data-class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-non-english-add-definition',
  templateUrl: './non-english-add-definition.component.html',
  styleUrls: ['./non-english-add-definition.component.css']
})
export class NonEnglishAddDefinitionComponent implements OnInit {

  constructor(private m: DataManagerService, private route: ActivatedRoute) {}

  id: string;
  termNonEnglish: termNonEnglish;
  newDefinition: Definition;
  date: string = new Date().toISOString();
  newDate = new Date(this.date);

  ngOnInit(): void {
    this.newDefinition  = {
      authorName: '',
      dateCreated: this.newDate,
      definition: '',
      quality: 0,
      likes: 0,
    };

    this.id = this.route.snapshot.paramMap.get('id');
    this.m.getOneTermsNonEnglishID(this.id).subscribe((response) => {
      this.termNonEnglish = response;
    });
  }

  addDefinition(): void{
    console.log(this.newDefinition.authorName);
    console.log(this.newDefinition.definition);

    this.m.addTermNonEnglishDefinition(this.id, this.newDefinition).subscribe(r => this.termNonEnglish = r);
  }
}
