import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { GradesRoutingModule } from './grades-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateComponent, AllComponent, DetailsComponent],
  imports: [
    CommonModule,
    GradesRoutingModule,
    FormsModule
  ]
})
export class GradesModule { }
