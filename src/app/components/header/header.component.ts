import { Component, OnInit } from '@angular/core';
import { IonButtons, IonIcon, IonList, IonToggle, IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent,IonCardSubtitle, IonButton, IonBadge } from '@ionic/angular/standalone';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    IonBadge,
    IonButton, 
    IonButtons, 
    IonIcon,
    IonList,
    IonToggle,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardSubtitle],
})
export class HeaderComponent  implements OnInit {
  title: string = 'Bateau de Thibault';
  totalItems: number = 0;
  public isHomePage: boolean = false;
  public activeTab: string = 'home';


  constructor(private cartService: CartService, private navCtr:NavController, private router:Router) {}

  ngOnInit() {

     this.cartService.totalItems$.subscribe(total => {
      this.totalItems = total; 
    });
       this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd) 
      )
      .subscribe(event => this.updateActiveTab(event));
  }

  private updateActiveTab(event: NavigationEnd) {
    this.isHomePage = event.urlAfterRedirects === '/home';

    if (event.urlAfterRedirects.includes('/produits')) {
      this.activeTab = 'produits';
    } else if (event.urlAfterRedirects.includes('/restaurants')) {
      this.activeTab = 'restaurants';
    } else if (event.urlAfterRedirects.includes('/bateaux')) {
      this.activeTab = 'bateaux';
    } else if (event.urlAfterRedirects.includes('/recettes')) {
      this.activeTab = 'recettes';
    } else {
      this.activeTab = 'home';
    }
  }

  goBack() {
    this.navCtr.back();
  }
}
