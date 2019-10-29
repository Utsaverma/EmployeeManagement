import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainScreenComponent } from './component/main-screen/main-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { LeftPanelComponent } from './component/left-panel/left-panel.component';
import { SearchEmployeeComponent } from './component/search-employee/search-employee.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ShowErrorsComponent } from './component/show-errors/show-errors.component';
import { PhoneFormat } from './validators/phoneNo.validator';
import { AtleastOneNumber } from './validators/multiplePhoneNo.validator';
import { EmailFormat } from './validators/EmailIdFormat.validator';
import { AtleastOneEmail } from './validators/multipleEmailId.validator';
import { AtleastOneAddress } from './validators/multipleaddress.validator';
import { PinCodeFormat } from './validators/PinCodeFormat.validator';
import { AddressFormat } from './validators/addressFormat.validator';
import { EmployeeIDFormat } from './validators/employeeID.validator';
import { DOBValidate } from './validators/dob.validator';
import { EmpNameFormat } from './validators/empNameFormat.validator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainScreenComponent,
    LeftPanelComponent,
    SearchEmployeeComponent,
    MainContainerComponent,
    AddEmployeeComponent,
    ShowErrorsComponent,
    PhoneFormat,
    AtleastOneNumber,
    EmailFormat,
    AtleastOneEmail,
    AtleastOneAddress,
    PinCodeFormat,
    AddressFormat,
    EmployeeIDFormat,
    DOBValidate,
    EmpNameFormat
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
