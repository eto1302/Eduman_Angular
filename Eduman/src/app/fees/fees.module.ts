import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { FeesRoutingModule } from './fees-routing.module';



@NgModule({
  declarations: [AllComponent, CreateComponent, DetailsComponent],
  imports: [
    CommonModule,
    FeesRoutingModule
  ]
})
export class FeesModule { }
