import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardTitle,IonCardSubtitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
import { Produit } from '../produit/produit.component'; 
import { ListsService } from 'src/app/services/lists.service';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';



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
  produits: any[] = [];
  constructor(private cartService: CartService,private http: HttpClient,private navCtrl: NavController,private activatedRoute:ActivatedRoute, private router : Router, private navCtr:NavController, private listsService:ListsService,) {
  }
  ngOnInit() {
    console.log("this is from ngOnInit")
    this.loadProduits();
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation()?.extras.state);
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
        this.infoType = navigation.extras.state['type'];
        this.item = navigation.extras.state['item'];
      }
    });
  }
  extractNumber(value: string): number {
    const match = value.match(/\d+/); 
    return match ? parseInt(match[0], 10) : 0;
  }
  getTotalTime(tempsDePreparation: string, tempsDeCuisson: string): string {
  const preparation = this.extractNumber(tempsDePreparation);
  const cuisson = this.extractNumber(tempsDeCuisson);
  const totalMinutes = preparation + cuisson;

  if (totalMinutes >= 60) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}min`; 
  } else {
    return `${totalMinutes} min`;
  }
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
  loadProduits(): void {
    this.listsService.getListProduits().subscribe(
      (data) => {
        this.produits = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      }
    );
  }
  findProductsByFirstWord(text: string): any | null {
    if (!text || typeof text !== 'string') {
        return null; 
    }
    const words = text.toLowerCase().split(/\s+/);
    if (words.length < 3 || words[2].length <= 2) {
        return null; 
    }
    const thirdWord = words[2]; 
    const produit = this.produits.find(produit => produit.name.toLowerCase().includes(thirdWord)) || null;
    return produit;
  }
  navigateToInfo(item: any, type: string) {
    this.item = item
    this.infoType = 'produit'
  }
}
