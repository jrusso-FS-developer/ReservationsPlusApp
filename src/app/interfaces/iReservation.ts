interface IReservation {
  id: number;
  name: string;
  partySize: number;
  date: Date;
  time: string;
  status: IReservationStatus;
  selected: boolean;
}
