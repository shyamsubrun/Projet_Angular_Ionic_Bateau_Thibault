import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { library, playCircle, radio, search, homeOutline, readerOutline, libraryOutline, searchOutline, fastFoodOutline, boatOutline, restaurantOutline, newspaperOutline } from 'ionicons/icons';
import { IonTab, IonHeader, IonTabBar, IonContent, IonToolbar, IonTitle, IonIcon, IonTabs, IonTabButton, IonLabel } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports : [CommonModule,IonLabel, RouterModule, IonTab, IonHeader, IonTabBar, IonContent, IonToolbar, IonTitle, IonIcon, IonTabs, IonTabButton],
})
export class TabsComponent implements OnInit {
  activeTab: string = 'home';

  constructor(private router: Router) {
    addIcons({ homeOutline, readerOutline, restaurantOutline, boatOutline, newspaperOutline, fastFoodOutline, libraryOutline, searchOutline, search, library, radio, playCircle });
  }

  ngOnInit() {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  onGoToHome() {
    this.setActiveTab('home');
    this.router.navigate(['/home']);
  }

  navigateToProduits() {
    this.setActiveTab('produits');
    this.router.navigate(['/produit']);
  }

  navigateToRestaurants() {
    this.setActiveTab('restaurants');
    this.router.navigate(['/list-all'], { queryParams: { type: 'restaurants' } });
  }

  navigateToBateaux() {
    this.setActiveTab('bateaux');
    this.router.navigate(['/list-all'], { queryParams: { type: 'bateaux' } });
  }

  navigateToRecettes() {
    this.setActiveTab('recettes');
    this.router.navigate(['/list-all'], { queryParams: { type: 'recettes' } });
  }
}
