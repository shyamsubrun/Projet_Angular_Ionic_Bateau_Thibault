import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';

import { library, playCircle, radio, search, homeOutline, readerOutline, libraryOutline, searchOutline, fastFoodOutline, boatOutline, restaurantOutline } from 'ionicons/icons';
import { IonTab, IonHeader, IonTabBar, IonContent, IonToolbar, IonTitle,IonIcon,IonTabs, IonTabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports : [IonTab, IonHeader, IonTabBar, IonContent, IonToolbar, IonTitle,IonIcon,IonTabs,IonTabButton],
})
export class TabsComponent  implements OnInit {
  constructor(private router:Router) {
    addIcons({homeOutline,readerOutline,restaurantOutline,boatOutline,fastFoodOutline,libraryOutline,searchOutline,search,library,radio,playCircle});
  }
  ngOnInit() { }

  onGoToParams() {
    this.router.navigate(['/parametre']);
  }

}
