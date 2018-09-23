import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './services/Auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    SearchModule
  ],
  declarations: [AppComponent],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
