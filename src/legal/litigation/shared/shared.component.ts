import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/api/api.service';
import { LegalRequest, Question } from './legalRequest.model';

interface Services {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  legalrequestform !: FormGroup;

  legalRequestObject: LegalRequest = new LegalRequest();

  services1: Services[] = [
    { value: 'JV-0', viewValue: 'Joint Venture' },
    { value: 'Accquistion-1', viewValue: 'Accquisition' },
    { value: 'Other-2', viewValue: 'Other' },
  ];

  services2: Services[] = [
    { value: 'DraftNDA-1', viewValue: 'Draft NDA' },
    { value: 'ReviewNDA-2', viewValue: 'Review NDA' },
    { value: 'DraftMoU-3', viewValue: 'Draft MoU' },
    { value: 'ReviewMoU-4', viewValue: 'Review MoU' },
    { value: 'DraftLetterOfIntent-5', viewValue: 'Draft Non Binding Offer/Letter of Intent' },
    { value: 'ReviewLetterOfIntent-6', viewValue: 'Review Non Binding Offer/Letter of Intent' },
    { value: 'LegalDueDiligence-7', viewValue: 'Legal Due Diligence' },
    { value: 'Draft/ReviewTermsheet-8', viewValue: 'Draft/Review Termsheet' },
    { value: 'Draft/ReviewJDA-9', viewValue: 'Draft/Review JDA' },
    { value: 'Draft/ReviewSPA-10', viewValue: 'Draft/Review SPA' },
    { value: 'Draft/ReviewSHA-11', viewValue: 'Draft/Review SHA' },
  ];

  services3: Services[] = [
    { value: 'Labour-1', viewValue: 'Labour' },
    { value: 'NonLabour-2', viewValue: 'Non-Labour' },
    { value: 'Arbitration-3', viewValue: 'Arbitration' },
    { value: 'Settlement-4', viewValue: 'Settlement' },
  ];

  services4: Services[] = [
    { value: 'Assessment-1', viewValue: 'Assessment' },
    { value: 'Investigation-2', viewValue: 'Investigation' },
    { value: 'CaseFiling-3', viewValue: 'Case Filing' },
    { value: 'Claim(s)-4', viewValue: 'Claim(s)' },
  ];

  services5: Services[] = [
    { value: 'LegalResearch-1', viewValue: 'Legal Research' },
    { value: 'LegalStudy-2', viewValue: 'Legal Study' }
  ];

  services6: Services[] = [
    { value: 'Draft-1', viewValue: 'Draft' },
    { value: 'Review-2', viewValue: 'Review' }
  ];

  services7: Services[] = [
    { value: 'EmployeeHRContracts-1', viewValue: 'Employee & HR Contracts' },
    { value: 'ServicesAgreements-2', viewValue: 'Services Agreements' },
    { value: 'ProcurementContracts-3', viewValue: 'Procurement Contracts' },
    { value: 'Others-4', viewValue: 'Others' },
  ];

  services8: Services[] = [
    { value: 'Draft-1', viewValue: 'Draft' },
    { value: 'Review-2', viewValue: 'Review' }
  ];

  services9: Services[] = [
    { value: 'ConstitutionalDocuments-1', viewValue: 'Constitutional Documents (CR, AoA, By-Laws)' },
    { value: 'Review-2', viewValue: 'Review' }
  ];

  services10: Services[] = [
    { value: 'IssueNewDocument-1', viewValue: 'Issue New Document' },
    { value: 'AmendExistingDocument-2', viewValue: 'Amend Existing Document' }
  ];


  constructor(private _apiService: ApiService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.legalrequestform = this._formBuilder.group({
      division: ['', Validators.required],
      service: ['', Validators.required],
      subject: ['', Validators.required],
      briefDescp: ['', Validators.required],
      questionnaire_1: ['', Validators.required],
      questionnaire_2: ['', Validators.required],
      question_1_comment: ['', Validators.required],
      question_2_comment: ['', Validators.required],
      attachments: ['', Validators.required],
      applicantName: ['', Validators.required],
      requestDateTime: ['', Validators.required],
      department: ['', Validators.required],
      signature: ['', Validators.required],
    })
  }

  postLegalRequest() {

    var questions = [
      {
        question: "Is there any attachment/support doc to the request?",
        answer: this.legalrequestform.value.questionnaire_1,
        comments: this.legalrequestform.value.question_1_comment
      },
      {
        question: "Did the applicant receive any previous work from legal subject to the requested service?",
        answer: this.legalrequestform.value.questionnaire_2,
        comments: this.legalrequestform.value.question_2_comment
      }
    ];

    this.legalRequestObject.division = this.varDivision;
    this.legalRequestObject.service = this.legalrequestform.value.service;
    this.legalRequestObject.subject = this.legalrequestform.value.subject;
    this.legalRequestObject.briefDescp = this.legalrequestform.value.briefDescp;
    this.legalRequestObject.questionnaire = questions;
    this.legalRequestObject.attachments = this.base64data;
    this.legalRequestObject.applicantName = this.legalrequestform.value.applicantName;
    this.legalRequestObject.requestDateTime = new Date().toString();
    this.legalRequestObject.department = this.legalrequestform.value.department;
    this.legalRequestObject.signature = this.legalrequestform.value.signature;

    console.log(this.legalRequestObject);

    this._apiService.createLegalRequest(this.legalRequestObject).subscribe(response => {
      console.log(response);
      alert("Legal Request Created Successfully");
    })
  }

  varDivision !: any;

  divisionName(divisionName: any) {
    //console.log(divisionName);
    this.varDivision = divisionName;
  }

  // selectDivision(event:any)
  // {
  //   value="BusinessDevelopment&Investment" (change)="selectDivision($event)"
  //   console.log(event.target.checked);
  // }

  resetRequestForm() {
    this.legalrequestform.reset();
  }

  files !: any[];
  base64data !: any[];
  fileName !: any[];
  data !: any;

  selectFiles(event: any) {
    this.files = [];
    this.base64data = [];
    const fileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        this.files.push(
          {
            "name": file.name,
            "size": file.size,
            "type": file.type,
            "base64": (reader.result as string).split(",")[1]
          },
          this.base64data.push(
            {
              name:file.name,
              content: (reader.result as string).split(",")[1]
            })           
        )
      };
    }
    //console.log(this.base64data);
    //console.log(this.files);
  }


}
