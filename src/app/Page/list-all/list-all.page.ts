import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { PageTypeService } from '../../services/page-type.service';
import { HttpClientModule } from '@angular/common/http'; 
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardTitle } from '@ionic/angular/standalone';

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
    IonCardContent
  ]
})
export class ListAllPage implements OnInit {
  data!: any;

  constructor(private router:Router, private pageTypeService:PageTypeService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.pageTypeService.getLocalData().subscribe(
      (response) => {
        this.data = response.Bateaux; 
        console.log(this.data); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }

  onToGolistBateau() {
    
  }
}
