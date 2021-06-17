import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';
import { ScoutSectionComponent } from './scout-section/scout-section.component';
import { MultiSectionComponent } from './multi-section/multi-section.component';
import { ActivityHelpComponent } from './activity-help/activity-help.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

@NgModule({
  declarations: [
    ActivitySummaryComponent,
    ScoutSectionComponent,
    MultiSectionComponent,
    ActivityHelpComponent,
    ActivityDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,

    AccordionModule,
    AlertModule,
    ButtonsModule,

  ],
  exports: [
    ActivitySummaryComponent,
  ]
})
export class ActivityFormModule { }
