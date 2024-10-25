import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardTitle,IonCardSubtitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import {Router ,ActivatedRoute} from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CartService } from '../../services/cart.service'; // Remplacez par le chemin correct
import { Produit } from '../produit/produit.component'; // Remplacez par le chemin correct



@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar,IonList, IonItem, IonLabel,IonIcon,IonCardSubtitle, CommonModule, FormsModule]
})
export class ContactPage  {
  item!:any
  infoType!: string
  constructor(private cartService: CartService,private http: HttpClient,private navCtrl: NavController,private activatedRoute:ActivatedRoute, private router : Router, private navCtr:NavController) {
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation()?.extras.state);
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
        this.infoType = navigation.extras.state['type'];
        this.item = navigation.extras.state['item'];
      }
    });
  }
  goBack() {
    this.navCtrl.back();
  }


  addToCart(product: Produit) {
    this.cartService.addToCart(product);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  getProductQuantity(productId: number): number {
    // Accéder à la valeur actuelle des articles du panier
    let quantity = 0;
    this.cartService.getCartItems().subscribe(cartItems => {
      const item = cartItems.find(p => p.id === productId);
      quantity = item ? item.quantity : 0;
    });
    return quantity;
  }
}
