import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Case } from 'src/legal/litigation/case';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl:string = "http://localhost:3000/cases";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  createCase(data: any) {
    return this.httpClient.post<any>(this.apiUrl, data)
      .pipe(map((res:any) => {
        return res;
      })
  )}

  getCases() {
    return this.httpClient.get<any>(this.apiUrl)
      .pipe(map((res:any) => {
        return res;
      })
  )}

  getCasesByID(id: number) {
    return this.httpClient.get<any>(this.apiUrl)
      .pipe(map((res:any) => {
        return res;
      })
  )}

  getById(id:number): Observable<Case> {
    return this.httpClient.get<Case>(this.apiUrl + '/' + id)
    .pipe(map((res:any) => {
      return res;
    })
  )}

//   errorHandler(error) {
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//  }


}
