import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTitle, IonLabel, IonContent, IonHeader, IonToolbar, IonList, IonItem, IonCard, IonCardHeader, IonIcon, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonCardContent, IonIcon, IonCardHeader, IonCard, IonItem, IonList, IonToolbar, IonHeader, IonContent, IonLabel, IonTitle, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
