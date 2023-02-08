import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Case } from 'src/legal/litigation/case';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiAddAttachments2: string = "https://prod-27.uaecentral.logic.azure.com:443/workflows/879d0882825e4e2e92c55f135cb0cbb0/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pMxNeqiHSRdFvk0a0VevwVpYlekCSaxTkS39mwppC8U";
  //private apiAddAttachments1: string = "https://prod-11.uaecentral.logic.azure.com:443/workflows/ae07a050763548f8a4524d00bf5c8d37/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=BICgIp3UhEH0B0n9przTG5-W8o6rtBU2pdb7c7RA-E4";
  
  private apiGetUrl: string = "https://prod-17.uaecentral.logic.azure.com:443/workflows/55e81441f1b34f9fb43b5acde93ff27b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Ws3sK0WOLk2_3XYQD9VOOmskg2_WQvuJCrHa-Jh8hiw";
  private apiLegalRequestsUrl: string = "https://prod-12.uaecentral.logic.azure.com:443/workflows/bee259904bb3411386d682627a02f718/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Uqz--LYQPuD3klFJ58qsozDttZxMhK7Xb-Me5eAQSpk";
  
  private apiGetByIDUrlHead: string = "https://prod-22.uaecentral.logic.azure.com/workflows/59fc97665e794080b0dce8fd6a1d0cc0/triggers/manual/paths/invoke";
  private apiGetByIDUrlTail: string = "?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_bm7xt23Dk6XG9hcCHmG7gyVbz6PWbQa9o0Vr16TI-0";
  private apiLegalRequestGetByIDUrlHead: string = "https://prod-11.uaecentral.logic.azure.com/workflows/193483ae91f042768c1bd23c42ac60ff/triggers/manual/paths/invoke";
  private apiLegalRequestGetByIDUrlTail: string = "?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=x1KoDjXxyS3QCaD6OwMoWqbLbh2JaDJtn3SUGVoNyFg";

  private apiPostUrl: string = "https://prod-04.uaecentral.logic.azure.com:443/workflows/27672a33d9fe4b3a956f9e15d52309d5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pkQ3iOEbQEEvUpGAYcuyfcmXHUFPJvY6kAg0ojki2hE";
  //private apiUrl:string = "http://localhost:3000/cases";
  //private apiUrl: string = "api/cases.json";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  createCase(data: any) {
    return this.httpClient.post<any>(this.apiPostUrl, data)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      })
      )
  }

  createLegalRequest(data: any) {
    return this.httpClient.post<any>(this.apiAddAttachments2, data)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      })
      )
  }

  getCases() {
    return this.httpClient.get<any>(this.apiGetUrl)
      .pipe(map((res: any) => {
        return res;
      })
      )
  }

  getLegalRequests() {
    return this.httpClient.get<any>(this.apiLegalRequestsUrl)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      })
      )
  }

  getCasesByID(id: number): Observable<any> { 
    console.log(this.apiGetByIDUrlHead + "/" + id + this.apiGetByIDUrlTail);
    return this.httpClient.get<any>(this.apiGetByIDUrlHead + "/" + id + this.apiGetByIDUrlTail)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      })
      )
  }

  getLegalRequestByID(id: number): Observable<any> { 
    console.log(this.apiLegalRequestGetByIDUrlHead + "/" + id + this.apiLegalRequestGetByIDUrlTail);
    return this.httpClient.get<any>(this.apiLegalRequestGetByIDUrlHead + "/" + id + this.apiLegalRequestGetByIDUrlTail)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      })
      )
  }

  private errorHandler(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = err.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }

}


// private apiUrl:string = "http://localhost:3000/cases";
//   //private apiUrl:string = "api/cases.json";

//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   }

//   constructor(private httpClient: HttpClient) { }

//   createCase(data: any) {
//     return this.httpClient.post<any>(this.apiUrl, data)
//       .pipe(map((res:any) => {
//         return res;
//       } )
//   )}

//   getCases() {
//     return this.httpClient.get<any>(this.apiUrl)
//       .pipe(map((res:any) => {
//         return res;
//       })
//   )}

//   getCasesByID(id: number) {
//     return this.httpClient.get<any>(this.apiUrl)
//       .pipe(map((res:any) => {
//         return res;
//       })
//   )}

//   getById(id:number): Observable<Case> {
//     return this.httpClient.get<Case>(this.apiUrl + '/' + id)
//     .pipe(map((res:any) => {
//       return res;
//     })
//   )}

//   private errorHandler(err: HttpErrorResponse) {
//     let errorMessage = '';
//     if(err.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = err.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(()=>errorMessage);
//  }

// }