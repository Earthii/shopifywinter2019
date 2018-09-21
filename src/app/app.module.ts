import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchModule } from './search/search.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthInterceptor } from './services/Auth.interceptor';
@NgModule({
  imports: [BrowserModule, SearchModule, HttpClientModule],
  declarations: [AppComponent, FavoritesComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
