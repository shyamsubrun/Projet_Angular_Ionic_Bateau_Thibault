import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
import { IonTab, IonHeader, IonTabBar, IonContent, IonToolbar, IonTitle,IonIcon,IonTabs, IonTabButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports : [IonTab, IonHeader, IonTabBar, IonContent, IonToolbar, IonTitle,IonIcon,IonTabs,IonTabButton],
})
export class TabsComponent  implements OnInit {
  constructor() {
    addIcons({ library, playCircle, radio, search });
  }
  ngOnInit() { }

}
