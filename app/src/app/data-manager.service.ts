import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// Import data model classes, for example...
import { termEnglish, termNonEnglish, Languages, Definition } from './data-class';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  // Inject the HttpClient
  constructor(private http: HttpClient) {}

  // Base URL for the web API
  // private url: string = 'http://localhost:8080';
  private url: string = 'https://hidden-waters-14346.herokuapp.com';
  private urlLanguages: string =
    'https://pam-2020-a2and3webapi.herokuapp.com/api/languages';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Callable methods...
  // For each entity, as appropriate, get, add, edit, delete
  // Add other methods that provide general service to all components in the app

  //Languages
  getAllLanguages(): Observable<Languages[]> {
    return this.http.get<Languages[]>(`${this.urlLanguages}`);
  }
  //English
  getAllTermsEnglish(): Observable<termEnglish[]> {
    return this.http.get<termEnglish[]>(`${this.url}/api/termEnglish`);
  }

  getOneTermsEnglishID(id: string): Observable<termEnglish> {
    console.log("getting: "+id)
    return this.http.get<termEnglish>(`${this.url}/api/termEnglish/${id}`);
  }
  
  getOneTermsEnglishWord(word: String): Observable<termEnglish> {
    console.log("getting word: "+word)
    return this.http.get<termEnglish>(`${this.url}/api/termEnglish/word/${word}`);
  }

  addTermEnglish(newItem: termEnglish): Observable<termEnglish> {
    console.log("addTermEnglish: "+`${this.url}/api/termEnglish`);
    return this.http.post<termEnglish>(`${this.url}/api/termEnglish`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: termEnglish) => console.log(`Added item ${newItem.wordEnglish}`)),
        catchError(this.handleError<termEnglish>('User add'))
      );
  }

  addTermEnglishDefinition(id: string, newItem: Definition): Observable<termEnglish> {
    return this.http.put<termEnglish>(`${this.url}/api/termEnglish/${id}/add-defintion`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: termEnglish) => console.log(`Edited item ${newItem.wordEnglish}`)),
        catchError(this.handleError<termEnglish>('User edit'))
      );
  }

  englishIncrementYes(id: string): Observable<termEnglish> {
    console.log(id);
    console.log(`${this.url}/api/termEnglish/yes/${id}`);
    return this.http.put<termEnglish>(
      `${this.url}/api/termEnglish/yes/${id}`,
      this.httpOptions
    );
  }

  englishIncrementNo(id: string): Observable<termEnglish> {
    console.log(id);
    console.log(`${this.url}/api/termEnglish/no/${id}`);
    return this.http.put<termEnglish>(
      `${this.url}/api/termEnglish/no/${id}`,
      this.httpOptions
    );
  }

  englishIncrementLikes(id: string): Observable<termEnglish> {
    console.log(id);
    console.log(`${this.url}/api/termEnglish/likes/${id}`);
    return this.http.put<termEnglish>(
      `${this.url}/api/termEnglish/likes/${id}`,
      this.httpOptions
    );
  }

  englishDelete(id: string) {
    console.log("in delete");
    return this.http.delete(`${this.url}/api/delete/termEnglish/${id}`)
      .pipe(
        tap(() => console.log(`Deleted item with id ${id}`)),
        catchError(this.handleError('User delete'))
      );
  }


  //Non-English
  getAllTermsNonEnglish(): Observable<termNonEnglish[]> {
    return this.http.get<termNonEnglish[]>(`${this.url}/api/termNonEnglish`);
  }
  getOneTermsNonEnglishID(id: string): Observable<termNonEnglish> {
    return this.http.get<termNonEnglish>(`${this.url}/api/termNonEnglish/${id}`);
  }

  addTermNonEnglishDefinition(id: string, newItem: Definition): Observable<termNonEnglish> {
    return this.http.put<termNonEnglish>(`${this.url}/api/termNonEnglish/${id}/add-defintion`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: termNonEnglish) => console.log(`Edited item ${newItem.wordEnglish}`)),
        catchError(this.handleError<termNonEnglish>('User edit'))
      );
  }

  addTermNonEnglish(newItem: termEnglish): Observable<termNonEnglish> {
    console.log("addTermNonEnglish: "+`${this.url}/api/termNonEnglish`);
    return this.http.post<termNonEnglish>(`${this.url}/api/termNonEnglish`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: termNonEnglish) => console.log(`Added item ${newItem.wordEnglish}`)),
        catchError(this.handleError<termNonEnglish>('User add'))
      );
  }

  nonEenglishIncrementYes(id: string): Observable<termNonEnglish> {
    console.log(id);
    console.log(`${this.url}/api/termEnglish/yes/${id}`);
    return this.http.put<termNonEnglish>(
      `${this.url}/api/termNonEnglish/yes/${id}`,
      this.httpOptions
    );
  }

  nonEnglishIncrementNo(id: string): Observable<termNonEnglish> {
    console.log(id);
    console.log(`${this.url}/api/termEnglish/no/${id}`);
    return this.http.put<termNonEnglish>(
      `${this.url}/api/termNonEnglish/no/${id}`,
      this.httpOptions
    );
  }

  nonEenglishIncrementLikes(id: string): Observable<termNonEnglish> {
    console.log(id);
    console.log(`${this.url}/api/termEnglish/likes/${id}`);
    return this.http.put<termNonEnglish>(
      `${this.url}/api/termNonEnglish/likes/${id}`,
      this.httpOptions
    );
  }

  nonEnglishDelete(id: string) {
    console.log("in delete");
    return this.http.delete(`${this.url}/api/delet/termNonEnglish/${id}`)
      .pipe(
        tap(() => console.log(`Deleted item with id ${id}`)),
        catchError(this.handleError('User delete'))
      );
  }
}
