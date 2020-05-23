import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-tournment',
  templateUrl: './tournment.component.html',
  styleUrls: ['./tournment.component.scss']
})
export class TournmentComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openContactDialog(): void {
    this.matDialog.open(ContactComponent, {
      width: '50%'
    });
  }

}
