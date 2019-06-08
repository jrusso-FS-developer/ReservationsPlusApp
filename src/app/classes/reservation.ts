import { ReservationStatus } from './reservationStatus';

export class Reservation implements IReservation {
  id: number;
  name: string;
  partySize: number;
  dateAndTime: Date;
  status: ReservationStatus;
  selected: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.partySize = data.partySize;
    this.dateAndTime = data.dateAndTime;
    this.status = new ReservationStatus(data.status);
    this.selected = false;
  }
}
