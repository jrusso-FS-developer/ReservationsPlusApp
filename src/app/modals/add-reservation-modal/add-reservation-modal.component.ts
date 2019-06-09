import { Component, OnInit, Inject } from '@angular/core';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reservation } from 'src/app/classes/Reservation';

@Component({
  selector: 'app-add-reservation-modal',
  templateUrl: './add-reservation-modal.component.html',
  styleUrls: ['../../app.component.css','./add-reservation-modal.component.css']
})
export class AddReservationModalComponent implements OnInit {
  reservationForm: FormGroup;
  reservation:Reservation = new Reservation();

  constructor(public dialogRef:MatDialogRef<AddReservationModalComponent>,
    private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data: Reservation) { }

  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      partySize: ['', Validators.required]
    });

    this.reservationForm.get('name').valueChanges
      .subscribe((name) => {
        this.reservation.name = name;
      });

    this.reservationForm.get('date').valueChanges
      .subscribe((date) => {
        this.reservation.date = date;
      });

    this.reservationForm.get('time').valueChanges
      .subscribe((time) => {
        this.reservation.time = time;
      });

    this.reservationForm.get('partySize').valueChanges
      .subscribe((partySize) => {
        this.reservation.partySize = partySize;
      });
  }
}
