import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButton, IonButtons, IonBackButton, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonButton, IonButtons, IonBackButton, IonToolbar]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
