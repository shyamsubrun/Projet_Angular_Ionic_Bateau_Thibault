import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { PageTypeService } from '../../services/page-type.service';
import { ListsService } from 'src/app/services/lists.service';
import { HttpClientModule } from '@angular/common/http'; 
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardTitle } from '@ionic/angular/standalone';
import { Bateau, Restaurant, Recette, Type } from 'src/app/models/bateau.model';


@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.page.html',
  styleUrls: ['./list-all.page.scss'],
  standalone: true,
  imports: [ 
    HttpClientModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    IonCardTitle,
    IonIcon,
    IonCardContent,
    IonCardTitle
  ]
})
export class ListAllPage implements OnInit {
  listBateaux!: Bateau[];
  listRestaurants!: Restaurant[];
  listRecettes!: Recette[];
  listType!: Type;

  constructor(private router:Router, private pageTypeService:PageTypeService, private listsService: ListsService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.getListBateaux()
    this.getListRestaurants()
    this.getListRecettes()
  }

  getListBateaux() {
  this.listsService.getListBateaux().subscribe(
    (response) => {
      this.listBateaux = response.bateaux;  // Les bateaux sont récupérés ici
      this.listType = response.type; 
    },
    (error) => {
      console.error('Erreur lors de la récupération des données :', error);
    }
  );
}
  getListRestaurants() {
    this.listsService.getListRestaurants().subscribe(
      (response) => {
        this.listRestaurants = response.restaurants
        this.listType = response.type; 
        console.log(this.listRestaurants); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
  getListRecettes() {
    this.listsService.getListRecettes().subscribe(
      (response) => {
        this.listRecettes = response.recettes
        this.listType = response.type; 
        console.log(this.listRecettes); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
}
