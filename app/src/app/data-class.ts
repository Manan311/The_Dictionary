import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

export class Languages{
  name: string;
  code: string;
}

export class Definition {
  authorName: String;
  dateCreated: Date;
  definition: String;
  quality?: Number;
  likes: number;
}

export class termEnglish {
  _id?: string
  wordEnglish: String;
  wordNonEnglish?: String;
  wordExpanded?: String;
  languageCode: String;
  image?: String;
  imageType?: String;
  audio?: String;
  audioType?: String;
  linkAuthoritative?: String;
  linkWikipedia?: String;
  linkYouTube?: String;
  authorName: String;
  dateCreated: Date;
  dateRevised: Date;
  fieldOfStudy: String;
  helpYes: Number;
  helpNo: Number;
  definitions?: [Definition];
}

export class termNonEnglish {
  // _id?: string
  termEnglishId: String;
  wordEnglish: String;
  wordNonEnglish: String;
  wordExpanded?: String;
  languageCode: String;
  image?: String;
  imageType?: String;
  audio?: String;
  audioType?: String;
  linkAuthoritative?: String;
  linkWikipedia?: String;
  linkYouTube?: String;
  authorName: String;
  dateCreated: Date;
  dateRevised: Date;
  fieldOfStudy: String;
  helpYes: Number;
  helpNo: Number;
  definitions: [Definition];
}

export class registerUser{
  username: string;
  password: string;
  conformationPassword?: string;
  email: string;
}

export class Login{
  username: string;
  password: string;
}