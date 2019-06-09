export class ReservationStatus implements IReservationStatus {
  id: number;
  name: string;

  constructor(data:any = null) {
    if (data){
      this.id = data.id;
      this.name = data.name;
    } else {
      this.id = 0;
      this.name = 'Active';
    }
  }
}
