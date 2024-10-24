import { Component, OnInit } from '@angular/core';
import { IonButtons, IonIcon, IonList, IonToggle, IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent,IonCardSubtitle, IonButton, IonBadge } from '@ionic/angular/standalone';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

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

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(() => {
      this.totalItems = this.cartService.getTotalItems();
    });
  }
}
