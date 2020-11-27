import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { ReqInterceptor } from './http.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ReqInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
