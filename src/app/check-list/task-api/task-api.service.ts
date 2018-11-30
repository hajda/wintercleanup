import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' 
})
export class TaskApiService {

  private url = 'http://wintercleanup.epizy.com/entities/task/2'

  constructor(private  http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
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
}
