// app/pages/produit/produit.component.ts
import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import {IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent} from  '@ionic/angular/standalone';
@Component({
  selector: 'app-produit',
  standalone: true,  // Gardez cette ligne
  imports: [IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent,CommonModule], // Ajoutez cette ligne
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits: any[] = [];  // Tableau pour stocker les produits

  constructor(private listsService: ListsService) { }

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
}
