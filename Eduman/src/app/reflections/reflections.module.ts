import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { AllComplimentsComponent } from './all-compliments/all-compliments.component';
import { AllCriticismsComponent } from './all-criticisms/all-criticisms.component';
import { ReflectionsRoutingModule } from './reflections-routing.module';



@NgModule({
  declarations: [CreateComponent, DetailsComponent, AllComplimentsComponent, AllCriticismsComponent],
  imports: [
    CommonModule,
    ReflectionsRoutingModule
  ]
})
export class ReflectionsModule { }
