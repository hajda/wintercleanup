import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class TaskApiService implements OnInit {

  private getUrl = `http://wintercleanup.epizy.com//entities/task`;
  private postUrl = `http://wintercleanup.epizy.com//entities/task`;

  constructor(private  http: HttpClient) { }

  ngOnInit() {
    console.log(`URL: ${this.getUrl}`);
  }

    /* GET */

get(): Observable<any> {
    console.log(`URL: ${this.getUrl}`);
    return this.http.get<any>(this.getUrl).pipe(
        tap(data => console.log('All:' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '[GET] /entities/task/{:id} >';

    if (error.error instanceof  ErrorEvent) {
      errorMessage = `${errorMessage} ${error.error.message}`;
    } else {
      errorMessage = ` HTTP ${error.status}: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  /* POST */

    post(task: any): Observable<any> {
        return this.http
            .post<any>(this.postUrl, task, httpOptions)
            .pipe(catchError(this.handleError));
    }
}
