import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule, AccordionModule } from 'ngx-bootstrap';

import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';
import { ScoutSectionComponent } from './scout-section/scout-section.component';
import { MultiSectionComponent } from './multi-section/multi-section.component';
import { ActivityHelpComponent } from './activity-help/activity-help.component';

@NgModule({
  declarations: [
    ActivitySummaryComponent,
    ScoutSectionComponent,
    MultiSectionComponent,
    ActivityHelpComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    AccordionModule,
    AlertModule,

  ],
  exports: [
    ActivitySummaryComponent,
  ]
})
export class ActivityFormModule { }
