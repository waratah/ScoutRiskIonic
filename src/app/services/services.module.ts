import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './System/auth.service';
import { HttpErrorInterceptor } from './System/HttpErrorInterceptor';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    HttpErrorInterceptor,
  ],
  exports: [
  ]
})
export class ServicesModule { }
