import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {IonSelect,IonLabel,IonSelectOption,IonItem,IonButton,IonCardContent,IonCardTitle,IonCardHeader,IonCard,IonCardSubtitle,IonList,IonContent,IonTitle,IonToolbar,IonHeader, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Ajoutez ceci
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

interface PointRelais {
  id: number;
  name: string;
  address: string;
  hours: string;
  price: number;
  type: string;
  availability: string;
  phone: string;
  url: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [IonSelect,IonLabel,IonSelectOption,IonIcon, IonButtons, IonItem,IonButton,CommonModule,IonCardContent,IonCardTitle,IonCardHeader,IonCard,IonCardSubtitle,IonList,IonContent,IonTitle,IonToolbar,IonHeader],
  standalone: true,

})

export class CartComponent implements OnInit {
  cartItems: any[] = [];
  pointRelais: PointRelais[] = [];
  selectedPointRelais: PointRelais | null = null;
  errormessage: string = '';
  constructor(private http: HttpClient,private cartService: CartService, private router: Router, private navCtr:NavController ) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  
    // Charger les points relais à partir du fichier JSON
    this.http.get<PointRelais[]>('assets/data/listPointrelais.json').subscribe(data => {
      this.pointRelais = data;
  
      // Récupérer le point relais sélectionné depuis le Local Storage
      const storedRelais = localStorage.getItem('selectedPointRelais');
      if (storedRelais) {
        this.selectedPointRelais = JSON.parse(storedRelais);
      }
    });
  }
  
  selectPointRelais(pointRelaisId: number) {
    const selectedRelais = this.pointRelais.find(pr => pr.id === pointRelaisId) || null;
    this.selectedPointRelais = selectedRelais;
    
    // Stocker le point relais sélectionné dans le Local Storage
    if (this.selectedPointRelais) {
      localStorage.setItem('selectedPointRelais', JSON.stringify(this.selectedPointRelais));
      this.errormessage = ''; // Effacer le message d'erreur si un point relais est sélectionné
    }
  }
  
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  getTotalPrice(): number {
    const totalItemsPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryPrice = this.selectedPointRelais ? this.selectedPointRelais.price : 0;
    return totalItemsPrice + deliveryPrice;
  }
  validateCart() {
    // Vérifier si un point relais est sélectionné avant de valider le panier
    if (!this.selectedPointRelais) {
      this.errormessage = 'Veuillez sélectionner un point relais avant de valider le panier.';
      return;
    }

    // Vider le panier
    this.cartService.clearCart();
    
    // Supprimer le point relais du Local Storage
    localStorage.removeItem('selectedPointRelais');
    
    // Rediriger vers la page d'accueil
    this.router.navigate(['/home']);
  }
  

   goBack() {
     this.navCtr.back();
  }
}