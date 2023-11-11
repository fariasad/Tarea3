import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, RouterLink, HeaderComponent, IonImg]
})
export class MenuPrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
