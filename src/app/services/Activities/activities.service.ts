import { Injectable } from '@angular/core';
import { IActivityType } from '../Definitions/IActivityType';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private ActivityTypes = new BehaviorSubject<IActivityType[]>([
    { name: 'Camp Activity', code: 1 },
    { name: 'Wide Game', code: 2 },
    { name: 'Bush Craft', code: 3 },
    { name: 'Abseiling', code: 4 },
    { name: 'Canoe', code: 4 },
    { name: 'Caving', code: 5 },
    { name: 'Cooking', code: 6 },
    { name: 'Flying', code: 7 },
    { name: 'Rock Climbing', code: 11 },
    { name: 'Sailing', code: 9 },
    { name: 'Skiing', code: 10 },
    { name: 'Scuba', code: 12 },
    { name: 'Activity Collection', code: 14 },
  ]);

  ActivityTypes$ = this.ActivityTypes.asObservable();

  constructor() { }

}
