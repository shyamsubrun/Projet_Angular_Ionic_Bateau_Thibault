import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardTitle,IonCardSubtitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import {Router ,ActivatedRoute} from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar,IonList, IonItem, IonLabel,IonIcon,IonCardSubtitle, CommonModule, FormsModule]
})
export class ContactPage  {
  item!:any
  infoType!: string
  constructor(private http: HttpClient,private activatedRoute:ActivatedRoute, private router : Router) {
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation()?.extras.state);
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
        this.infoType = navigation.extras.state['type'];
        this.item = navigation.extras.state['item'];
      }
    });
  }
}
