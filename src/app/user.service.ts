import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) { }

  public getUsers() {
    const params = new HttpParams().set('clef1', 'valeur1').append('clef2','valeur2');
    return this.http.get<{name: string}[]>('https://http-ca9f2.firebaseio.com/users.json').pipe(
      retry(2), catchError(error => {
        return throwError(error.message);
      }));
  }    
    
  public createUsers(users: { name: string }[]) {
    return this.http.put('https://http-ca9f2.firebaseio.com/users.json', users);
  }
}