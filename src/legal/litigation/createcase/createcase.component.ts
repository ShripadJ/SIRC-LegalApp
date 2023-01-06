import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/api/api.service';
import { createCaseModel } from './createcase.model';

@Component({
  selector: 'app-createcase',
  templateUrl: './createcase.component.html',
  styleUrls: ['./createcase.component.css']
})
export class CreatecaseComponent implements OnInit {

  createcaseform !: FormGroup;

  createCaseObj: createCaseModel = new createCaseModel();

  constructor(private _apiService: ApiService ,private _formBuilder:FormBuilder) { }

  saveForm() {
    console.log('FormData', this.createcaseform.value);
  }

  resetCaseForm() {
    this.createcaseform.reset();
  }

  postCaseDetails() {
    this.createCaseObj.companyName = this.createcaseform.value.companyName;
    this.createCaseObj.crNum = this.createcaseform.value.crNum;
    this.createCaseObj.natAdd = this.createcaseform.value.natAdd;
    this.createCaseObj.dirID = this.createcaseform.value.dirID;
    this.createCaseObj.appPhn = this.createcaseform.value.appPhn;
    this.createCaseObj.appEmail = this.createcaseform.value.appEmail;
    this.createCaseObj.appPosition = this.createcaseform.value.appPosition;
    this.createCaseObj.appName = this.createcaseform.value.appName;
    this.createCaseObj.appManPhn = this.createcaseform.value.appManPhn;
    this.createCaseObj.appManEmail = this.createcaseform.value.appManEmail;
    this.createCaseObj.appManPosition = this.createcaseform.value.appManPosition;
    this.createCaseObj.appManName = this.createcaseform.value.appManName;
    this.createCaseObj.appAltPhn = this.createcaseform.value.appAltPhn;
    this.createCaseObj.appAltEmail = this.createcaseform.value.appAltEmail;
    this.createCaseObj.appAltPosition = this.createcaseform.value.appAltPosition;
    this.createCaseObj.appAltName = this.createcaseform.value.appAltName;
    this.createCaseObj.defName = this.createcaseform.value.defName;
    this.createCaseObj.defId = this.createcaseform.value.defId;
    this.createCaseObj.defCrocReq = this.createcaseform.value.defCrocReq;
    this.createCaseObj.defPhn = this.createcaseform.value.defPhn;
    this.createCaseObj.defAdd = this.createcaseform.value.defAdd;
    this.createCaseObj.claimAllegation = this.createcaseform.value.claimAllegation;
    this.createCaseObj.claimLawsuit = this.createcaseform.value.claimLawsuit;
    this.createCaseObj.claimDamages = this.createcaseform.value.claimDamages;
    this.createCaseObj.claimAmt = this.createcaseform.value.claimAmt;

    this._apiService.createCase(this.createCaseObj).subscribe(response => {
      console.log(response);
      alert("Case Added Successfully");
      this.createcaseform.reset();
    })
  }

  ngOnInit() {
    this.createcaseform = this._formBuilder.group({
      companyName:['', Validators.required],
      crNum:['', Validators.required],
      natAdd:['', Validators.required],
      dirID:['', Validators.required],
      appPhn:['', Validators.required],
      appEmail:['', Validators.required],
      appPosition:['', Validators.required],
      appName:['', Validators.required],
      appManPhn:['', Validators.required],
      appManEmail:['', Validators.required],
      appManPosition:['', Validators.required],
      appManName:['', Validators.required],
      appAltPhn:['', Validators.required],
      appAltEmail:['', Validators.required],
      appAltPosition:['', Validators.required],
      appAltName:['', Validators.required],
      defName:['', Validators.required],
      defId:['', Validators.required],
      defCrocReq:['', Validators.required],
      defPhn:['', Validators.required],
      defAdd:['', Validators.required],
      claimAllegation:['', Validators.required],
      claimLawsuit:['', Validators.required],
      claimDamages:['', Validators.required],
      claimAmt:['', Validators.required],
    })
  }

}
