import { Component } from '@angular/core';
import { IonIcon,IonList,IonToggle,IonItem,IonLabel,IonSelect,IonSelectOption,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon,IonList,IonToggle,IonItem,IonLabel,IonSelect,IonSelectOption,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
