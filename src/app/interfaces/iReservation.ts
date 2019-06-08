interface IReservation {
  id: number;
  name: string;
  partySize: number;
  dateAndTime: Date;
  status: IReservationStatus;
  selected: boolean;
}
