import { Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { HomeComponent } from './UI/components/home/home.component';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { FullscreenComponent } from './UI/layouts/fullscreen/fullscreen.component';
import { LoginComponent } from './UI/components/login/login.component';
import { RegisterComponent } from './UI/components/register/register.component';
import { authGuardGuard } from './UI/shared/guards/auth-guard.guard';

export const routes: Routes = [
  {path:'', redirectTo:'/fullscreen/login', pathMatch:'full'},
  {
    //url.com/
    path: '',
    component:DefaultComponent,
    canActivate:[authGuardGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactusComponent
      }
    ]
  },
  {
    path:'fullscreen',
    component:FullscreenComponent,
    children:[
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      }
    ]
  }
];
