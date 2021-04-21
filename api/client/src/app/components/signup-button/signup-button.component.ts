import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
  styles: [
  ]
})
export class SignupButtonComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  safeSrc2: SafeResourceUrl;
  constructor(public auth: AuthService, private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl
    ("https://www.youtube.com/embed/IVE6naG4pqw");
    this.safeSrc2 =  this.sanitizer.bypassSecurityTrustResourceUrl
    ("https://www.youtube.com/embed/rpUbfnMls3U");
   }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
  
}
