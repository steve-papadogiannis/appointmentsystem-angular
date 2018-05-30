import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {Routing} from './app.routing';
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './alert.service';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth.guard';
import {RoleSpecificationGuard} from './role.specification.guard';
import {RoleSpecificationComponent} from './role-specification/role-specification.component';
import {RoleService} from './role.service';
import {SpecialtyComponent} from './specialty/specialty.component';
import {SpecialtyGuard} from './specialty.guard';
import {SpecialtyService} from './specialty.service';
import {NavBarComponent} from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarPageComponent } from './calendar/calendar-page.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import {EventService} from './event.service';
import {ProfileViewComponent} from './profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RoleSpecificationComponent,
    SpecialtyComponent,
    NavBarComponent,
    SidebarComponent,
    CalendarPageComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    Routing
  ],
  providers: [
    AuthGuard,
    RoleSpecificationGuard,
    AlertService,
    AuthenticationService,
    SpecialtyService,
    SpecialtyGuard,
    EventService,
    RoleService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
