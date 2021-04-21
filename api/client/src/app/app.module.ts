import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { PhotographyComponent } from './components/photography/photography.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import {LoginButtonComponent} from './components/login-button/login-button.component'
import {LogoutButtonComponent} from './components/logout-button/logout-button.component'
import {SignupButtonComponent} from './components/signup-button/signup-button.component'
import {AuthenticationButtonComponent} from './components/authentication-button/authentication-button.component'
import {getTravelLoc} from '@Viraj-Sonavane/travel-test';
import { WanderlustComponent } from './components/wanderlust/wanderlust.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotographyComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    AuthenticationButtonComponent,
    WanderlustComponent,
    YoutubeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-bs03n2qz.us.auth0.com',
      clientId: 'sDyRldLguuRIgQyvTiBdZWdRQ91YZng0',
      audience: 'https://localhost:3000/photographys',
      httpInterceptor: {
        allowedList: [`https://localhost:3000/api/*`],
      },
    }),
    //getTravelLoc
  ],
  providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthHttpInterceptor,
  multi: true,  
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
