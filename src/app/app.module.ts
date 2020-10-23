import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { IconsModule } from '@progress/kendo-angular-icons';
// import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { EventLogComponent } from './event-log/event-log.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from '@progress/kendo-angular-label';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    DashBoardComponent,
    DummyComponentComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EventLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    DateInputsModule,
    ButtonsModule,
    IntlModule,
    IconsModule,
    LabelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
