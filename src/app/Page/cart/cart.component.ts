import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {IonItem,IonButton,IonCardContent,IonCardTitle,IonCardHeader,IonCard,IonCardSubtitle,IonList,IonContent,IonTitle,IonToolbar,IonHeader} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Ajoutez ceci
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [IonItem,IonButton,CommonModule,IonCardContent,IonCardTitle,IonCardHeader,IonCard,IonCardSubtitle,IonList,IonContent,IonTitle,IonToolbar,IonHeader],
  standalone: true,

})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

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
  validateCart() {
    // Vider le panier
    this.cartService.clearCart();
    
    // Rediriger vers la page d'accueil
    this.router.navigate(['/home']);
  }
}