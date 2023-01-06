import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CreatecaseService {

  private apiURL = "api/cases.json";
  
  constructor(private http:HttpClient) { }

}
