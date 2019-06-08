import { Component, OnInit } from '@angular/core';
import { ReservationService } from './services/reservation.service';
import { Reservation } from './classes/Reservation';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  selectAll: boolean;
  reservations: IReservation[];

  private _routerSubscription: Subscription;

  constructor(private _reservationService: ReservationService) {
    this.selectAll = false;
    this.reservations = [];

    //JUST FOR NOW... to be replaced with logic adding from form submission.
    this.reservations = this._reservationService.removeReservations();
    this.reservations = this._reservationService.addReservation(new Reservation({"id": 0, "name": "Pete Rose", "partySize": 4, "dateAndTime": "6/6/2019, 10:45:00 AM", "status": { "id": 3, "name": "Expired"}}))
    this.reservations = this._reservationService.addReservation(new Reservation({"id": 1, "name": "Justin Russo", "partySize": 4, "dateAndTime": "6/6/2019, 10:45:00 AM", "status": { "id": 3, "name": "Expired"}}))
    
  }

  ngOnInit() {
    this._reservationService.getReservations()
      .subscribe(data => {
        if (data.length > 0) this.reservations = data;
      });
  }

  toggleSelect(all: boolean, reservation: Reservation) {
    if (all && !reservation) {
      this.selectAll = !this.selectAll;
      if (this.selectAll) {
        this.reservations.forEach((r) => {
          r.selected = false;
        });
      }
    }
    else if (reservation) {
      if (this.selectAll) {
        this.selectAll = false;
        this.reservations.forEach((r) => {
          r.selected = !(r.id === reservation.id);
        });
      } else {
        reservation.selected = !reservation.selected;
      }
    }

    //TODO:: Logic for single selects
  }

  openAddModal() {
    
  }

  fulfill(reservation) {
    if (!reservation) {
      //TODO:: Logic for fulfilling selected reservations
    } else if (reservation) {
      //TODO:: Logic for fulfilling only one reservation
    };
  }

  cancel(reservation) {
    if (!reservation) {
      //TODO:: Logic for cancelling selected reservations
    } else if (reservation) {
      //TODO:: Logic for cancelling only one reservation
    };
  }
}
