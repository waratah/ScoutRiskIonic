import { Injectable } from '@angular/core';
import {
  HttpEvent,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): object {
    return { access: 'authorised', times: 1 };
  }

  refreshToken() : object {
    return { access: 'authorised', times : 2 };
  }

  pipe( details: any): Observable<HttpEvent<any>> {
    const temp: any = {};
    return temp;
  }
}
