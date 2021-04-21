import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationButtonComponent} from './components/authentication-button/authentication-button.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent} from './components/logout-button/logout-button.component';
import {PhotographyComponent} from './components/photography/photography.component'
import {SignupButtonComponent} from './components/signup-button/signup-button.component'
import {WanderlustComponent} from './components/wanderlust/wanderlust.component'
import {YoutubeComponent} from './components/youtube/youtube.component'


const routes: Routes = [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginButtonComponent },
    { path: 'logout', component: LogoutButtonComponent },
    { path: 'authenticate', component: AuthenticationButtonComponent },
    { path: 'photography', component: PhotographyComponent},
    { path: 'home', component:SignupButtonComponent},
    { path: 'wanderlust', component:WanderlustComponent},
    { path: 'vlog', component:YoutubeComponent},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }