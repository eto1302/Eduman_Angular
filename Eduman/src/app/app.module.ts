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
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    CoreModule,
    AbsencesModule,
    EventsModule,
    GradesModule,
    FeesModule,
    ReflectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
