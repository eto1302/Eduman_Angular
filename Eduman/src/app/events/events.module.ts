import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { EventsRoutingModule } from './events-routing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [CreateComponent, AllComponent, DetailsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
