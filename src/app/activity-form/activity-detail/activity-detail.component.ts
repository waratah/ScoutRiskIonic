import { Component, OnInit } from '@angular/core';
import find from 'lodash-es/find';

import { IActivity } from 'src/app/Interfaces/IActivity';
import { StateNames } from 'src/app/enums/StateNames';
import {
  IScoutState,
  IScoutRegion,
  IScoutDistrict,
  IScoutGroup,
  IActivitySelection,
} from 'src/app/services/Definitions';
import { StatesService } from 'src/app/services/scouts/states.service';
import { ActivitiesService } from 'src/app/services/Activities/activities.service';
import { Observable } from 'rxjs';
import { IActivityType } from 'src/app/services/Definitions/IActivityType';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {
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

  protected selections: IActivitySelection[] = [];

  activityTypes$: Observable<IActivityType[]>;

  constructor(
    stateService: StatesService,
    activitiesService: ActivitiesService
  ) {
    this.states = stateService.States();
    this.activityTypes$ = activitiesService.ActivityTypes$;
  }

  onChangeState(state: string) {
    const code = Number(state);
    this.activity.state = code;
    this.regions = find(this.states, x => x.code === code).regions;
  }

  onChangeRegion(region: string) {
    const code = Number(region);
    this.activity.region = code;
    this.districts = find(this.regions, x => x.code === code).districts;
  }

  onChangeDistrict(district: string) {
    const code = Number(district);
    this.activity.district = code;
    this.groups = find(this.districts, x => x.code === code).groups;
  }

  onChangeGroup(group: number) {
    this.activity.scoutGroup = group;
    // this.groups = find( this.districts, x => x.code === group).groups;
  }
  addNew() {
    this.selections.push({ state: '', region: '', group: '', district: '' });
  }
  ngOnInit(): void {
    this.addNew();
  }
}
