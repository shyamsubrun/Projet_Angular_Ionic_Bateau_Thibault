// app/pages/produit/produit.component.ts
import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import {IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent} from  '@ionic/angular/standalone';
import { CartService } from 'src/app/services/cart.service';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-produit',
  standalone: true,  // Gardez cette ligne
  imports: [IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent,CommonModule], // Ajoutez cette ligne
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits: any[] = [];  // Tableau pour stocker les produits

  constructor(private listsService: ListsService, private cartService: CartService,private router :Router) { }

  ngOnInit(): void {
    this.loadProduits();  // Charger les produits au démarrage
  }

  loadProduits(): void {
    this.listsService.getListProduits().subscribe(
      (data) => {
        this.produits = data;  // Assigner les données à la variable
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      }
    );
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
  getProductQuantity(productId: number): number {
    const item = this.cartService['cartItems'].find(item => item.id === productId);
    return item ? item.quantity : 0;
  }
  navigateToInfo(item: any, type: string) {
    console.log("this is from all-âge" + JSON.stringify(item, null, 2))
    console.log(item)
    let navigationExtras: NavigationExtras = {
      state: {
        item: item,
        type: type
      }
    }
    this.router.navigate(['/info-item'], navigationExtras);
  }
}
