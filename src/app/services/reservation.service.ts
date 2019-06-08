import { Injectable } from '@angular/core';
import { LocalStorageService } from './localStorage.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Reservation } from '../classes/Reservation';

@Injectable()
export class ReservationService {
  private _reservations: IReservation[];
  private _reservationKeyName: string = 'reservations';

  constructor(private _localStorage: LocalStorageService) {
    this._reservations = new Array<Reservation>();
  }

  addReservation(reservation: Reservation): IReservation[] {
    this._reservations.push(reservation);
    this._localStorage.set<IReservation[]>(this._reservationKeyName, this._reservations);

    return this._reservations;
  }

  getReservations(): Observable<IReservation[]> {
    return this._localStorage.select<IReservation[]>(this._reservationKeyName, new Array<Reservation>());
  }


  removeReservations(): IReservation[] {
    this._localStorage.remove(this._reservationKeyName);
    this._reservations = new Array<Reservation>();

    return this._reservations;
  }
}
