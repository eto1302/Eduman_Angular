import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AbsencesModule } from './absences/absences.module';
import { EventsModule } from './events/events.module';
import { GradesModule } from './grades/grades.module';
import { FeesModule } from './fees/fees.module';
import { ReflectionsModule } from './reflections/reflections.module';
import {FormsModule} from '@angular/forms'
import { SharedModule } from './shared/shared.module';
import { KinveyModule } from 'kinvey-angular-sdk';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,  
    CoreModule,
    AbsencesModule,
    EventsModule,
    GradesModule,
    FeesModule,
    ReflectionsModule,
    FormsModule,
    KinveyModule.init({
      appKey: 'kid_ByHi9m4XL',
      appSecret: 'dc1ba19f136b49508eff8e13fd391556'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
