import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared/shared/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LitigationhomeComponent } from 'src/legal/litigation/litigationhome/litigationhome.component';
import { CreatecaseComponent } from 'src/legal/litigation/createcase/createcase.component';
import { CaseinfoComponent } from 'src/legal/litigation/caseinfo/caseinfo.component';
import { CasearchiveComponent } from 'src/legal/litigation/casearchive/casearchive.component';
import { CasedetailsComponent } from 'src/legal/litigation/caseinfo/casedetails/casedetails.component';
import { CaseinfoGuard } from './caseinfo/caseinfo.guard';

@NgModule({
  declarations: [
    LitigationhomeComponent,
    CreatecaseComponent,
    CaseinfoComponent,
    CasearchiveComponent,
    CasedetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      { path:'litigationhome', component:LitigationhomeComponent },
      { path:'createcase', component:CreatecaseComponent },
      { path:'caseinfo', component:CaseinfoComponent },
      { path:'casearchive', component:CasearchiveComponent},
      { path:'caseinfo/:id', canActivate: [CaseinfoGuard] , component:CasedetailsComponent },
    ]),
  ],
  exports: []
})
export class CaseModule {  }
