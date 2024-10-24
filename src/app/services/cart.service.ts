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
  private cartItems: CartItem[] = this.loadCart(); // Charger les articles au démarrage
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.cartItems);

  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  constructor() {
    this.updateTotalItems(); // Mettre à jour le nombre total d'articles au démarrage
  }

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Incrémente la quantité si l'élément existe déjà
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems);
    this.updateTotalItems();
    this.saveCart(); // Sauvegarder le panier après chaque ajout
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
      this.updateTotalItems();
      this.saveCart(); // Sauvegarder le panier après chaque retrait
    }
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  private updateTotalItems() {
    this.totalItemsSubject.next(this.getTotalItems());
  }

  clearCart() {
    this.cartItems = []; // Vider le panier
    this.cartItemsSubject.next(this.cartItems);
    this.updateTotalItems(); // Mettre à jour le nombre total d'articles
    this.saveCart(); // Sauvegarder le panier vide
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadCart(): CartItem[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
}
