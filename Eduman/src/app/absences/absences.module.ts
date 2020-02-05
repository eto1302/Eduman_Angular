import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { AbsencesRoutingModule } from './absences-routing.module';



@NgModule({
  declarations: [AllComponent, CreateComponent],
  imports: [
    CommonModule,
    AbsencesRoutingModule
  ]
})
export class AbsencesModule { }
