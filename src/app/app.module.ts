import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageIndexComponent } from './pageIndex/pageIndex.component';
import { SectionGoldComponent } from './sectionGold/sectionGold.component';
import { HospitaisDestaqueComponent } from './hospitais-destaque/hospitais-destaque.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      PageIndexComponent,
      SectionGoldComponent,
      HospitaisDestaqueComponent,
      HospitalFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
