import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
   <style> 
    .logo {
    height: 50px;
    width: 50px;
    padding: 0px;
    display: block;
    margin: 0 auto;
    background:url('../assets/swift.svg') 
    no-repeat center center;
    }
    </style>
    <a href="wanderlust" class="navbar-brand ">
      <div class="logo"></div>
    </a>  
    <a href="wanderlust" class="navbar-brand">
        <h1>
          {{title}}
        </h1>
    </a>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <a routerLink="photography" class="nav-link">
          <h3>
              LOCATION
          </h3>
        </a>
      </li>
      <li class="nav-item">
        <a routerLink="home" class="nav-link">
          <h3>   
            GALLERY
          </h3>
        </a>  
      </li>
      <li class="nav-item">
        <a routerLink="vlog" class="nav-link">
          <h3>   
            VLOG
          </h3>
        </a>  
      </li>
      <li class="nav-item">
        <app-authentication-button>
        </app-authentication-button>
      </li>
    </div>
  </nav>

  <div>
    <router-outlet></router-outlet>
  </div>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WANDERLUST!!';
}
