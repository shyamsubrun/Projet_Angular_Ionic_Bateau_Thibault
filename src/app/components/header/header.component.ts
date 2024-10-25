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
  title: string = 'Titre';
  totalItems: number = 0;
  public isHomePage: boolean = false;


  constructor(private cartService: CartService, private navCtr:NavController, private router:Router) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(() => {
      this.totalItems = this.cartService.getTotalItems();
    });
  
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        const navigationEndEvent = event as NavigationEnd;
        this.isHomePage = navigationEndEvent.urlAfterRedirects === '/home';
      });
  }

  goBack() {
    this.router.navigate(['../']); 
  }
}
