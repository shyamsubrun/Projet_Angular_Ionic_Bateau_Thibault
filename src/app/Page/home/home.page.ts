import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';
import { IonIcon, IonList, IonToggle, IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonButtons, IonBadge, IonSearchbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { TabsComponent } from 'src/app/tabs/tabs.component';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ListsService } from 'src/app/services/lists.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  imports: [
    IonBadge,
    IonButtons,
    RouterModule,
    CommonModule,
    IonFooter,
    TabsComponent,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonList,
    IonToggle,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar, FormsModule,
  ],
})
export class HomePage implements OnInit {
  totalItems: number = 0; 
  searchTerm: string = '';
  produits: any[] = [];
  filteredProduits: any[] = [];

  constructor(private router: Router, private cartService: CartService, private listsService: ListsService) { }

  ngOnInit() {
    // Abonnez-vous au nombre d'articles dans le panier
    this.cartService.totalItems$.subscribe(count => {
      this.totalItems = count;
    });

    // Charger les produits lors de l'initialisation
    this.loadProduits();
  }

  // Naviguer vers la page 'list-all'
  onGoToListAll() {
    this.router.navigate(['/list-all']);
  }

  // Filtrer les produits selon le terme de recherche
  filterItems() {
  if (this.searchTerm.length >= 2) {
    this.filteredProduits = this.produits.filter(produit => 
      produit.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } else {
    this.filteredProduits = []; 
  }
}

  loadProduits(): void {
    this.listsService.getListProduits().subscribe(
      (data) => {
        this.produits = data;
        this.filteredProduits = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      }
    );
  }
  navigateToInfo(categoty: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        category : categoty
      }
    }
    this.router.navigate(['/produit'], navigationExtras);
  }
}
