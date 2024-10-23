import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.cartItems);

  private items: any[] = [];
  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Incrémente la quantité si l'élément existe déjà
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(productId: number) {
    const itemIndex = this.cartItems.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      const item = this.cartItems[itemIndex];
      if (item.quantity > 1) {
        item.quantity -= 1; // Décrémente la quantité
      } else {
        this.cartItems.splice(itemIndex, 1); // Retire l'élément si la quantité atteint 0
      }
      this.cartItemsSubject.next(this.cartItems);
    }
  }
  getTotalItems(): number {
    return this.cartItems.length; // Renvoie le nombre total d'articles
  }

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }
  private updateTotalItems() {
    this.totalItemsSubject.next(this.getTotalItems());
  }

  clearCart() {
    this.items = []; // Vider le panier
    this.updateTotalItems(); // Mettre à jour le nombre total d'articles
  }
}
