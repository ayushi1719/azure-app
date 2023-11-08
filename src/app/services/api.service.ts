import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  api_url = environment.api_url;

  getRequest(url: string) {
    return this.http.get(this.api_url + url)
      .pipe(
        catchError(this.handleError)
      );
  }

  postRequest(url: string, payload: any) {
    return this.http.post(this.api_url + url, payload)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: any): Observable<never> {
    console.error('An error occurred: ', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
