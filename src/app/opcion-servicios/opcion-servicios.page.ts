import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-opcion-servicios',
  templateUrl: './opcion-servicios.page.html',
  styleUrls: ['./opcion-servicios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})
export class OpcionServiciosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
