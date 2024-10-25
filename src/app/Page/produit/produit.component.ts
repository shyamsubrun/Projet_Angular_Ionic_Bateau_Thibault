import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListsService } from '../../services/lists.service';
import {IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent, IonButtons, IonIcon, IonBadge, IonButton,IonSearchbar } from  '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { CartService } from 'src/app/services/cart.service';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

export interface Produit {
  id: number;
  name: string;
  price: number;
  unit: string;
  category: number;
  availability: boolean;
  sale: boolean;
  discount: number;
  comments: string;
  owner: string;
  url: string;
}
@Component({
  selector: 'app-produit',
  standalone: true,  
  imports: [IonButton, 
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
    CommonModule,
    IonSearchbar,
    FormsModule
  ], 
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits: any[] = [];
  filtreProduits: any[] = [];
  category!: number | 'all'
  searchTerm: string = '';

  constructor(private listsService: ListsService, private cartService: CartService,private router :Router,private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduits();
    this.activatedRoute.queryParams.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
        this.loadfiltre(navigation)
      }
    });
  }
  loadfiltre(navigation : any) {
    this.category = navigation.extras.state['category'];
    this.filterByCategory(this.category)
  }

  loadProduits(): void {
    this.listsService.getListProduits().subscribe(
      (data) => {
        this.produits = data;  
        this.filtreProduits = this.produits;
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

  filterByCategory(category: number | 'all') {
  this.category = category;
  if (category === 'all') {
    this.filtreProduits = this.produits;
  } else {
    this.filtreProduits = this.produits.filter(produit => produit.category === category);
  }
  }
  // Filtrer les produits selon le terme de recherche
  filterItems() {
    if (this.searchTerm.length >= 2) {
      this.filtreProduits = this.produits.filter(produit => 
        produit.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filterByCategory(this.category)
    }
  }
}