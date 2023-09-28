import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"support",component:SupportComponent},
  {path:"student",component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
