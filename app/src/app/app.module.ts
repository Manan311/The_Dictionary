import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TermenglishComponent } from './termenglish/termenglish.component';
import { TermnonenglishComponent } from './termnonenglish/termnonenglish.component';
import { DetailComponent } from './detail/detail.component';

import { FormsModule } from '@angular/forms';
import { AddDefinitionComponent } from './add-definition/add-definition.component';
import { AddTranslationComponent } from './add-translation/add-translation.component';
import { AddNewTermComponent } from './add-new-term/add-new-term.component';
import { DetailNonEnglishComponent } from './detail-non-english/detail-non-english.component';
import { NonEnglishAddDefinitionComponent } from './non-english-add-definition/non-english-add-definition.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    TermenglishComponent,
    TermnonenglishComponent,
    DetailComponent,
    AddDefinitionComponent,
    AddTranslationComponent,
    AddNewTermComponent,
    DetailNonEnglishComponent,
    NonEnglishAddDefinitionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
