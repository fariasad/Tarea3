import { Component } from '@angular/core';
import { IonHeader, IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader],
})
export class AppComponent {
  constructor() {}
}
