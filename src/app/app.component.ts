import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationService } from './services/reservation.service';
import { Reservation } from './classes/Reservation';
import { AddReservationModalComponent } from './modals/add-reservation-modal/add-reservation-modal.component';
import { MessageModalComponent } from './modals/message-modal/message-modal.component';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  selectAll: boolean;
  reservations: Array<IReservation>;
  newReservation: Reservation;

  constructor(private _reservationService: ReservationService, public dialog: MatDialog) {
    this.selectAll = false;
    this.reservations = new Array<IReservation>();
    this.newReservation = new Reservation();

    //this.clearReservations();    
  }

  ngOnInit() {
    this._reservationService.getReservations()
      .subscribe(data => {
        if (data && data.length > 0) {
          this.reservations = new Array<IReservation>();

          data.map(r => {             
            this.reservations.push(new Reservation(r));
          })
        };
      });
  }

  openAddModal(): void {
    const dialogRef = this.dialog.open(AddReservationModalComponent, {
      width: '325px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this._reservationService.addReservation(new Reservation(result));
    });
  }

  openMessageModal(title: string, message: string): void {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      width: '400px',
      data: { title: title, message: message }
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
          r.selected = !(r === reservation);
        });
      } else {
        reservation.selected = !reservation.selected;
      }
    }
  }

  updateStatus(status: string) {
    let selectedReservations: Array<IReservation> = new Array<IReservation>(); 

    selectedReservations = (this.selectAll) ? this.reservations : selectedReservations;
    
    if (!this.selectAll) {
      this.reservations.forEach((r) => {
        if (r.selected)
          selectedReservations.push(r);
      });
    }else this.selectAll = false;

    let statusChangeCount = 0;

    selectedReservations.forEach((r) => {
      switch(r.status.name.toLowerCase()) {
        case 'active':
          r.status.name = status;
          r.selected = false;
          statusChangeCount++;
          break;
        case 'cancelled':
        case 'fulfilled':
          let message: string = `${r.date.toLocaleDateString()} at ${r.time} is already ${r.status.name.toLowerCase()}.`;
          let title: string = `Reservation Fulfillment/Cancellation for ${r.name}`;

          this.openMessageModal(title, message);
          break;
      }
    })

    this._reservationService.setReservations(this.reservations);
    
    if (statusChangeCount > 0){
      let message: string = (status.toLowerCase() === 'fulfilled') ? 
        `${statusChangeCount} reservations fulfilled.` :
        `${statusChangeCount} reservations cancelled.`;
      let title: string = (status.toLowerCase() === 'fulfilled') ? 
        'Reservation Fulfillments' :
        'Reservation Cancellations';
      
      this.openMessageModal(title, message);
    }
  }

  clearReservations() {    
    this.reservations = this._reservationService.removeReservations();
  }
}
