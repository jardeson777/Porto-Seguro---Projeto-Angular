import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DateHospitaisModule {
    public id : string | undefined;
    public createdAt : string | undefined;
    public name : string | undefined;
    public image : string | undefined;
    public detail : string | undefined;
    public address : string | undefined;
    public phone : string | undefined;
}
