import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {IonCardContent,IonCardTitle,IonCardHeader,IonCard,IonCardSubtitle,IonList,IonContent,IonTitle,IonToolbar,IonHeader} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Ajoutez ceci

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule,IonCardContent,IonCardTitle,IonCardHeader,IonCard,IonCardSubtitle,IonList,IonContent,IonTitle,IonToolbar,IonHeader],
  standalone: true,

})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}