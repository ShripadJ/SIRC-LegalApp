import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {

  requestData !: any;

  displayedColumns: string[] = ['Id', 'Division', 'ApplicantName', 'Department', 'ReqDateTime', 'Action'];

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getLegalRequestData();
  }

  getLegalRequestData() {
    this._apiService.getLegalRequests().subscribe(res => {
      //console.log(res);
      this.requestData = res;
    })
  }

}
