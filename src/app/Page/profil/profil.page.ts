import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBadge,IonAvatar,IonList,IonItem,IonIcon,IonLabel,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonBadge,IonAvatar,IonList,IonItem,IonIcon,IonLabel,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfilPage {
  user: any;

  private userUrl = '/assets/data/listUser.json';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.http.get(this.userUrl).subscribe((data: any) => {
      this.user = data.user;
    });
  }

  goBack() {
    this.navCtrl.back();
  }
}