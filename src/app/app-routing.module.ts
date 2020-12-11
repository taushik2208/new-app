import { EmployeesupportComponent } from './employeesupport/employeesupport.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'user-details/:id', component: UserDetailComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'support', component: SupportComponent, children: [
    { path: '', component: EmployeesupportComponent },
    { path: 'employeesupport', component: EmployeesupportComponent },
    { path: 'customersupport', component: ContactComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
