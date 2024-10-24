import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';
import { ListsService } from 'src/app/services/lists.service';
import { HttpClientModule } from '@angular/common/http'; 
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardTitle,IonCardSubtitle } from '@ionic/angular/standalone';
import { Bateau, Restaurant, Recette, Type } from 'src/app/models/bateau.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.page.html',
  styleUrls: ['./list-all.page.scss'],
  standalone: true,
  imports: [ 
    RouterModule,
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
    IonCardTitle,
    IonCardSubtitle
  ]
})
export class ListAllPage implements OnInit {
  listBateaux!: Bateau[];
  listRestaurants!: Restaurant[];
  listRecettes!: Recette[];
  listType!: string;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private listsService: ListsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.listType = params['type'];
      this.loadData();
    });
  }

  loadData() {
    switch (this.listType) {
      case 'bateaux':
        this.getListBateaux();
        break;
      case 'restaurants':
        this.getListRestaurants();
        break;
      case 'recettes':
        this.getListRecettes();
        break;
      default:
        console.error('Type non reconnu');
    }
  }

  getListBateaux() {
  this.listsService.getListBateaux().subscribe(
    (response) => {
      this.listBateaux = response.bateaux;
      console.log(this.listBateaux); 
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
        console.log(this.listRecettes); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
  navigateToInfo(item: any, type: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        item: item,
        type: type
      }
    }
    this.router.navigate(['/info-item'], navigationExtras);
  }
}
