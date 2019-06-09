import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['../../app.component.css','./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {
  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<MessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.message = data.message;
      this.title = data.title;
    }

  ngOnInit() {
  }

}
