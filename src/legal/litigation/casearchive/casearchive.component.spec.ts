/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CasearchiveComponent } from './casearchive.component';

describe('CasearchiveComponent', () => {
  let component: CasearchiveComponent;
  let fixture: ComponentFixture<CasearchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasearchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasearchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
