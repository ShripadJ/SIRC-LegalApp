// import { Injectable } from '@angular/core';
// import { Case } from './case';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { catchError, Observable, tap, throwError } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
// })
// export class CaseService {

//     private url: string = "api/cases.json";

//     constructor(private http: HttpClient) { }

//     getCases(): Observable<Case[]> {
//         return this.http.get<Case[]>(this.url).pipe(
//             tap(data => console.log('All', JSON.stringify(data))),
//             catchError(this.handleError)
//         );
//     }

//     private handleError(err: HttpErrorResponse) {

//         let errorMessage = '';
//         if ( err.error instanceof ErrorEvent) {
//             errorMessage= `An error occurred: ${err.error.message}`;
//         } else {
//             errorMessage= `Server returned code: ${err.status}, error message is: ${err.message}`;
//         }
//         console.log(errorMessage);
//         return throwError(()=>errorMessage);
//     }

// }
