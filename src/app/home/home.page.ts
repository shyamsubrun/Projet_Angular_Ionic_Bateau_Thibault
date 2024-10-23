import { Component } from '@angular/core';
import { IonIcon, IonList, IonToggle, IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {TabsComponent} from '../components/tabs/tabs.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [TabsComponent,IonIcon,IonList,IonToggle,IonItem,IonLabel,IonSelect,IonSelectOption,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
