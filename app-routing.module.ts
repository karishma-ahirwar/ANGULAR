import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'loginpage',component: LoginpageComponent},
  {path: 'homepage',component: HomepageComponent},
  {path: '', redirectTo: '/loginpage',pathMatch: 'full'},
  {path: '**',redirectTo: '/loginpage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
