import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStudentComponent } from './pages/add-new-student/add-new-student.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'AddStudent', component: AddNewStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
