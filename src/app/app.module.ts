import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BASE_URL, CLIENT_ID, REDIRECT_URL} from './config';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ErrorComponent} from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: BASE_URL,
      useValue: environment.baseUrl
    },
    {
      provide: CLIENT_ID,
      useValue: environment.clientID
    },
    {
      provide: REDIRECT_URL,
      useValue: environment.redirectUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
