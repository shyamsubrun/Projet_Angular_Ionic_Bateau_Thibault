import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { CommonModule } from '@angular/common'; 
import {IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent, IonButtons, IonIcon, IonBadge } from  '@ionic/angular/standalone';
import { CartService } from 'src/app/services/cart.service';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-produit',
  standalone: true,  
  imports: [
    HeaderComponent,
    IonBadge,
    IonIcon,
    IonButtons,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonCardSubtitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule
  ], 
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits: any[] = [];  
  constructor(private listsService: ListsService, private cartService: CartService,private router :Router) { }

  ngOnInit(): void {
    this.loadProduits();  
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
