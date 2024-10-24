import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardTitle,IonCardSubtitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import {Router ,ActivatedRoute} from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';



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
  constructor(private http: HttpClient,private activatedRoute:ActivatedRoute, private router : Router, private navCtr:NavController) {
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation()?.extras.state);
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
        this.infoType = navigation.extras.state['type'];
        if (this.infoType == "contact") {
          this.loadContactData();
        } else this.item = navigation.extras.state['item'];
      }
    });
  }
  loadContactData() {
    this.http.get('assets/data/listContact.json').subscribe(data => {
      this.item = data;
    });
  }

  goBack() {
    this.navCtr.back();
  }
}
