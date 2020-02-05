import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { GradesRoutingModule } from './grades-routing.module';



@NgModule({
  declarations: [CreateComponent, AllComponent, DetailsComponent],
  imports: [
    CommonModule,
    GradesRoutingModule
  ]
})
export class GradesModule { }
