import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleObj } from './googletranslate';

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {

  url = 'https://translation.googleapis.com/language/translate/v2?key=';
  key = 'AIzaSyDdNMOW18X49lTrm0t9QJ04YwLSKBvgvd8';

  constructor(private http: HttpClient) { }

  translate(obj: GoogleObj) {
    return this.http.post(this.url + this.key, obj);
  }

}
