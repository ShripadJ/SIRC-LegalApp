import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';

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
      this.casesData = response;
    })
  }

}
