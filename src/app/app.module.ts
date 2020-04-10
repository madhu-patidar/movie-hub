import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './middlewares/errorInterceptor';
import { FormcontrolValidationMsgDirective } from './directives/formcontrol-validation-msg.directive';
import { FormsubmitValidationMsgDirective } from './directives/formsubmit-validation-msg.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormcontrolValidationMsgDirective,
    FormsubmitValidationMsgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
