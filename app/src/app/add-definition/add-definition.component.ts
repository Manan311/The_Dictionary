import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { termEnglish, Definition } from '../data-class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-definition',
  templateUrl: './add-definition.component.html',
  styleUrls: ['./add-definition.component.css']
})
export class AddDefinitionComponent implements OnInit {

  constructor(private m: DataManagerService, private route: ActivatedRoute) {}

  id: string;
  termEnglish: termEnglish;
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
    this.m.getOneTermsEnglishID(this.id).subscribe((response) => {
      this.termEnglish = response;
    });
  }

  addDefinition(): void{
    console.log(this.newDefinition.authorName);
    console.log(this.newDefinition.definition);

    this.m.addTermEnglishDefinition(this.id, this.newDefinition).subscribe(r => this.termEnglish = r);
  }
}
