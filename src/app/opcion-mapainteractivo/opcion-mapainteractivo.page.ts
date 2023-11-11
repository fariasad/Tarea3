import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-opcion-mapainteractivo',
  templateUrl: './opcion-mapainteractivo.page.html',
  styleUrls: ['./opcion-mapainteractivo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})
export class OpcionMapainteractivoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
