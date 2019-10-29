import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchEmployeeComponent } from './component/search-employee/search-employee.component';
import { MainScreenComponent } from './component/main-screen/main-screen.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';

const routes: Routes = [
  { path: 'mainScreen', component: MainScreenComponent },
  { path: 'addEmployee', component:AddEmployeeComponent},
  { path: 'searchEmployee', component: SearchEmployeeComponent },
  { path: '', redirectTo:'searchEmployee',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }