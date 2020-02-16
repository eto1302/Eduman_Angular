import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { FeesRoutingModule } from './fees-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllComponent, CreateComponent, DetailsComponent],
  imports: [
    CommonModule,
    FeesRoutingModule,
    FormsModule
  ]
})
export class FeesModule { }
