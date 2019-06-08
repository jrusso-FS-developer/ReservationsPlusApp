import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservationService } from './services/reservation.service';
import { LocalStorageService } from './services/localStorage.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquare, faCheckSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars, faThumbsUp, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [ReservationService, LocalStorageService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    library.add(faBars, faSquare, faCheckSquare, faThumbsUp, faTimesCircle, faCircle, faPlusCircle);
  }
}
