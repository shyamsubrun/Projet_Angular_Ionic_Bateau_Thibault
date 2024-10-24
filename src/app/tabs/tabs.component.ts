import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { library, playCircle, radio, search, homeOutline, readerOutline, libraryOutline, searchOutline, fastFoodOutline, boatOutline, restaurantOutline, newspaperOutline } from 'ionicons/icons';
import { IonTab, IonHeader, IonTabBar, IonContent, IonToolbar, IonTitle,IonIcon,IonTabs, IonTabButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports : [RouterModule,IonTab, IonHeader, IonTabBar, IonContent, IonToolbar, IonTitle,IonIcon,IonTabs,IonTabButton],
})
export class TabsComponent  implements OnInit {
  constructor(private router:Router) {
    addIcons({homeOutline,readerOutline,restaurantOutline,boatOutline,newspaperOutline,fastFoodOutline,libraryOutline,searchOutline,search,library,radio,playCircle});
  }
  ngOnInit() { }

  onGoToParams() {
    this.router.navigate(['/parametre']);
  }

  onGoToHome() {
    this.router.navigate(['/home']);
  }
  navigateToBateaux() {
    this.router.navigate(['/list-all'], { queryParams: { type: 'bateaux' } });
  }

  navigateToRestaurants() {
    this.router.navigate(['/list-all'], { queryParams: { type: 'restaurants' } });
  }

  navigateToRecettes() {
    this.router.navigate(['/list-all'], { queryParams: { type: 'recettes' } });
  }

  navigateToProduits() {
    this.router.navigate(['/produit']);
  }

}
