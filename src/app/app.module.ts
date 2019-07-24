import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import {AdministratorComponent} from './modules/administrator/administrator.component';
import { LoginComponent } from './modules/login/login.component';
import { SidebarComponent } from './components/header/sidebar/sidebar.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { EmployeesComponent } from './modules/administrator/employees/employees.component';
import { ToolsComponent } from './modules/administrator/tools/tools.component';
import { EntertainmentsComponent } from './modules/administrator/entertainments/entertainments.component';
import { EventsComponent } from './modules/administrator/events/events.component';
import { LaborComponent } from './modules/administrator/labor/labor.component';
import { SchedulesComponent } from './modules/administrator/schedules/schedules.component';
import { SuggestionsComponent } from './modules/administrator/suggestions/suggestions.component';
import { ReportsComponent } from './modules/administrator/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdministratorComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    EmployeesComponent,
    ToolsComponent,
    EntertainmentsComponent,
    EventsComponent,
    LaborComponent,
    SchedulesComponent,
    SuggestionsComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
