import { ReservationStatus } from './reservationStatus';

export class Reservation implements IReservation {
  id: number;
  name: string;
  partySize: number;
  date: Date;
  time: string;
  status: IReservationStatus;
  selected: boolean;

  constructor(data: any = null) {
    if (data) {
      this.name = data.name;
      this.partySize = data.partySize;
      this.date = new Date(data.date);
      this.time = data.time;
      this.status = data.status ? data.status : new ReservationStatus();
    } 
    this.selected = false;
  }
}
