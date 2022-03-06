import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'th-TH'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
