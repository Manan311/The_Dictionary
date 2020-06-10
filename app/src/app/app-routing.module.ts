import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { NotfoundComponent } from './notfound/notfound.component';
import { TermenglishComponent } from './termenglish/termenglish.component';
import { TermnonenglishComponent } from './termnonenglish/termnonenglish.component';
import { DetailComponent } from './detail/detail.component';
import { AddDefinitionComponent } from './add-definition/add-definition.component';
import { AddTranslationComponent } from './add-translation/add-translation.component';
import { AddNewTermComponent } from './add-new-term/add-new-term.component';
import { DetailNonEnglishComponent } from './detail-non-english/detail-non-english.component';
import { NonEnglishAddDefinitionComponent } from './non-english-add-definition/non-english-add-definition.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'term/english', component: TermenglishComponent },
  { path: 'term/nonEnglish', component: TermnonenglishComponent },
  { path: 'term/english/detail/:id', component: DetailComponent },
  { path: 'term/nonEnglish/detail/:id', component: DetailNonEnglishComponent },
  { path: 'term/english/create', component: AddNewTermComponent },
  { path: 'term/nonEnglish/add-translation/:id', component: AddTranslationComponent },
  { path: 'term/english/add-definition/:id', component: AddDefinitionComponent },
  { path: 'term/nonEnglish/add-definition/:id', component: NonEnglishAddDefinitionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
