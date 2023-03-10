import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api/api.service';
import { Case } from '../../case';

@Component({
  selector: 'app-casedetails',
  templateUrl: './casedetails.component.html',
  styleUrls: ['./casedetails.component.css']
})
export class CasedetailsComponent implements OnInit {

  pageTitle: string = "Case No.:";

  //casesData !: Case;

  casesData !: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _apiService: ApiService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` ${id}`;
    if (id) {
      this.getCasesByID(id);
    }
  }

  getCasesByID(id: number) {
    this._apiService.getCasesByID(id).subscribe(response => {
      this.casesData = response;
    })
  }

  onBack(): void{
    this.router.navigate(['/caseinfo']);
  }
}
