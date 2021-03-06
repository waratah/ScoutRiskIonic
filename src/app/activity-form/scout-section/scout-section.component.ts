import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { ScoutType } from 'src/app/enums/ScoutType';
import { ScoutService } from 'src/app/services/scouts/scout.service';
import { EnumElement } from 'src/app/Interfaces/enumElement';

@Component({
  selector: 'app-scout-section',
  templateUrl: './scout-section.component.html',
  styleUrls: ['./scout-section.component.scss']
})
export class ScoutSectionComponent implements OnInit {

  constructor(private scouts: ScoutService) { }

  list: Observable<EnumElement[]>;

  @Input() scoutType: ScoutType;
  @Output() scoutTypeChange: EventEmitter<ScoutType> = new EventEmitter<ScoutType>();

  ngOnInit() {
    this.list = this.scouts.ScoutTypes;
  }
}
