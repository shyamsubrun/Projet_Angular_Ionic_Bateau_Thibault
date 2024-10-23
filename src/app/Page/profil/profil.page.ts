import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBadge,IonAvatar,IonList,IonItem,IonIcon,IonLabel,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [IonBadge,IonAvatar,IonList,IonItem,IonIcon,IonLabel,IonCardSubtitle,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfilPage {
  user: any;

  private userUrl = '/assets/data/listUser.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.http.get(this.userUrl).subscribe((data: any) => {
      this.user = data.user;
    });
  }
}