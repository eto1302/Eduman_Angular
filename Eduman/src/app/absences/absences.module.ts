import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { AbsencesRoutingModule } from './absences-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllComponent, CreateComponent],
  imports: [
    CommonModule,
    AbsencesRoutingModule,
    FormsModule
  ]
})
export class AbsencesModule { }
