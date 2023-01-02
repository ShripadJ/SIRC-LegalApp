import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-createcase',
  templateUrl: './createcase.component.html',
  styleUrls: ['./createcase.component.css']
})
export class CreatecaseComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
  }

}
