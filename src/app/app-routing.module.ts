import { PageIndexComponent } from './pageIndex/pageIndex.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component: PageIndexComponent},
    {path: 'cadastro', component: HospitalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
