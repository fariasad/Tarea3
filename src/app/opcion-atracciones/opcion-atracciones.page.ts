import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-opcion-atracciones',
  templateUrl: './opcion-atracciones.page.html',
  styleUrls: ['./opcion-atracciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OpcionAtraccionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
