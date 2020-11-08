import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-people',
  templateUrl: './pop-up-people.component.html',
  styleUrls: ['./pop-up-people.component.css']
})
export class PopUpPeopleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopUpPeopleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onClickNO(): void {
    this.dialogRef.close();
  }

}
