import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-opcion-ventaentradas',
  templateUrl: './opcion-ventaentradas.page.html',
  styleUrls: ['./opcion-ventaentradas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OpcionVentaentradasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
