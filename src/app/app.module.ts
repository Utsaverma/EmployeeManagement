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
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainScreenComponent,
    LeftPanelComponent,
    SearchEmployeeComponent,
    MainContainerComponent
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
