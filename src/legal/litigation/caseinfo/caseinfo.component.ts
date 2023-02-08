import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';
// import { CaseService } from '../case.service';
// import { Case } from '../case';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-caseinfo',
  templateUrl: './caseinfo.component.html',
  styleUrls: ['./caseinfo.component.css']
})
export class CaseinfoComponent implements OnInit {

  casesData !: any;

  displayedColumns: string[] = ['Id', 'Name', 'CR No.', 'National Address', 'Directors ID', 'Action'];

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getCases();
  }

  getCases() {
    this._apiService.getCases().subscribe(response => {
      console.log(response);
      this.casesData = response;
    })
  }

}


//OnDestroy
// casesData !: any;

//   displayedColumns: string[] = ['Id', 'Name', 'CR No.', 'National Address', 'Directors ID', 'Action'];

//   cases: Case[] = [];

//   errorMessage: string = '';

//   sub!: Subscription;

//   constructor(private _apiService: ApiService, private _caseService: CaseService) { }

//   ngOnInit(): void {
//     this.sub = this._caseService.getCases().subscribe({
//       next: cases => this.cases = cases,
//       error: err => this.errorMessage = err
//     });
//     //this.getCases();
//   }

//   ngOnDestroy(): void {
//     this.sub.unsubscribe();
//   }

//   getCases() {
//     this._apiService.getCases().subscribe(response => {
//       this.casesData = response;
//     })
//   }