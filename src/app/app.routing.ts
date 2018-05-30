import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth.guard';
import {RoleSpecificationGuard} from './role.specification.guard';
import {RoleSpecificationComponent} from './role-specification/role-specification.component';
import {SpecialtyGuard} from './specialty.guard';
import {SpecialtyComponent} from './specialty/specialty.component';
import {CalendarPageComponent} from './calendar/calendar-page.component';
import {ProfileViewComponent} from './profile-view/profile-view.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard, RoleSpecificationGuard,
      SpecialtyGuard
      ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'role', component: RoleSpecificationComponent},
  {path: 'specialties', component: SpecialtyComponent},
  {path: 'calendar', component: CalendarPageComponent},
  {path: 'profileview', component: ProfileViewComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const Routing = RouterModule.forRoot(appRoutes);
