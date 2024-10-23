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

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: any) {
    const itemIndex = this.cartItems.findIndex(item => item.id === product.id);

    if (itemIndex > -1) {
      this.cartItems[itemIndex].quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(productId: number) {
    const itemIndex = this.cartItems.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
      if (this.cartItems[itemIndex].quantity > 1) {
        this.cartItems[itemIndex].quantity -= 1;
      } else {
        this.cartItems.splice(itemIndex, 1);
      }
    }

    this.cartItemsSubject.next(this.cartItems);
  }
}
