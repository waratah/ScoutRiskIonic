import { Component, OnInit } from '@angular/core';

import { IActivity } from 'src/app/Interfaces/IActivity';
import { StatesService } from 'src/app/services/scouts/states.service';
import { StateNames } from 'src/app/enums/StateNames';

import { IScoutState, IScoutRegion, IScoutDistrict, IScoutGroup } from 'src/app/services/Definitions';
import find from 'lodash-es/find';

@Component({
  selector: 'app-activity-summary',
  templateUrl: './activity-summary.component.html',
  styleUrls: ['./activity-summary.component.scss']
})
export class ActivitySummaryComponent implements OnInit {

  public activity: IActivity = {
    state: StateNames.Victoria,
    region: 1,
    district: 0,
    scoutGroup: 0,
  };
  protected states: IScoutState[];
  protected regions: IScoutRegion[];
  protected districts: IScoutDistrict[];
  protected groups: IScoutGroup[];


  constructor(
    stateService: StatesService,
    ) {
      this.states = stateService.States();
  }

  onChangeState( state: string ) {
    let code = Number(state);
    this.activity.state = code;
    this.regions = find( this.states, x => x.code === code).regions;
  }

  onChangeRegion( region: string ) {
    let code = Number(region);
    this.activity.region = code;
    this.districts = find( this.regions, x => x.code === code).districts;
  }

  onChangeDistrict( district: string ) {
    let code = Number(district);
    this.activity.district = code;
    this.groups = find( this.districts, x => x.code === code).groups;
  }

  onChangeGroup( group: number ) {
    this.activity.scoutGroup = group;
    // this.groups = find( this.districts, x => x.code === group).groups;
  }

  ngOnInit() {
  }

}
