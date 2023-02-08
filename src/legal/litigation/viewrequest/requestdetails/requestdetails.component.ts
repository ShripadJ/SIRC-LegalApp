import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.component.html',
  styleUrls: ['./requestdetails.component.css']
})
export class RequestdetailsComponent implements OnInit {

  pageTitle: string = "Legal Request No.:";

  requestData !: any;

  constructor(private route: ActivatedRoute,
             private router: Router,
             private _apiService: ApiService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` ${id}`;
    if (id) {
      this.getLegalRequestByID(id);
    }
  }

  getLegalRequestByID(id: number) {
    this._apiService.getLegalRequestByID(id).subscribe(response => {
      //console.log(response);
      this.requestData = response;
    })
  }

  onBack(): void{
    this.router.navigate(['/viewRequest']);
  }

}
