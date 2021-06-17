import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { ScoutType } from '../../enums/ScoutType';
import { EnumElement } from '../../Interfaces/enumElement';
import { ScoutList } from '../../Interfaces/scoutList';
import { ScoutDetail } from '../../Interfaces/scoutDetail';


@Injectable({
  providedIn: 'root'
})
export class ScoutService {

  public get ScoutTypes(): Observable<EnumElement[]> {
    return this.scoutTypeSubject.asObservable();
  }

  private scoutTypeSubject = new BehaviorSubject<EnumElement[]>([
    { value: 1, name: 'Joey' },
    { value: 2, name: 'Cub' },
    { value: 3, name: 'Scout' },
    { value: 4, name: 'Venturer' },
    { value: 5, name: 'Rover' },
    { value: 6, name: 'Leader' },
    { value: 7, name: 'Parent Helper' },
  ]);

  scoutTypes$ = this.scoutTypeSubject.asObservable();

  constructor(private http: HttpClient) {
    this.LoadScoutTypes();
  }

  public LoadScoutTypes() {
    this.http
      .get<EnumElement[]>(environment.api + 'scoutType')
      .subscribe(x => this.scoutTypeSubject.next(x),
        error => console.error(error)
      );
  }

  public LoadScouts(type: ScoutType, includeDeleted: boolean): Observable<ScoutList[]> {
    const url = environment.api + 'scoutSummary/' + type;
    return this.http
      .get<ScoutList[]>(url);
  }

  public Load(id: number): Observable<ScoutDetail> {
    if (!id) {
      return of({
        active: true, address: '', balance: 0, dOB: '', firstName: '', lastName: '', medical: '', memberNumber: '',
        postcode: '2233', section: ScoutType.Scout, state: 'NSW', suburb: 'Heathcote', scoutId: 0
      } as ScoutDetail);
    }
    return this.http
      .get<ScoutDetail>(environment.api + 'scout/' + id)
      .pipe(map((value, index) => {
        return value;
      }));
  }

  public Save(detail: ScoutDetail) {
    return this.http
      .post<ScoutDetail>(environment.api + 'scout', detail);
  }
}
