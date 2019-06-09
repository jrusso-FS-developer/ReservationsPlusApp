import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { 
  MatDialogModule, 
  MatButtonModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReservationService } from './services/reservation.service';
import { LocalStorageService } from './services/localStorage.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquare, faCheckSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars, faThumbsUp, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AddReservationModalComponent } from './modals/add-reservation-modal/add-reservation-modal.component';
import { MessageModalComponent } from './modals/message-modal/message-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReservationModalComponent,
    MessageModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule, 
    ReactiveFormsModule
  ],
  entryComponents: [
    AddReservationModalComponent,
    MessageModalComponent
  ],
  providers: [ReservationService, LocalStorageService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    library.add(faBars, faSquare, faCheckSquare, faThumbsUp, faTimesCircle, faCircle, faPlusCircle);
  }
}
