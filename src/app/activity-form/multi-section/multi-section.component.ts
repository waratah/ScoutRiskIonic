import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { ScoutService } from 'src/app/services/scouts/scout.service';
import { EnumElement } from 'src/app/Interfaces/enumElement';
import { ScoutType } from 'src/app/enums/ScoutType';

@Component({
  selector: 'app-multi-section',
  templateUrl: './multi-section.component.html',
  styleUrls: ['./multi-section.component.scss']
})
export class MultiSectionComponent implements OnInit {
  constructor(private scouts: ScoutService) { }

  list: Observable<EnumElement[]>;

  @Input() scoutType: ScoutType;
  @Output() scoutTypeChange: EventEmitter<ScoutType> = new EventEmitter<ScoutType>();

  ngOnInit() {
    this.list = this.scouts.ScoutTypes;
  }

}
