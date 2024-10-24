import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar,IonList,IonItem,IonIcon,IonLabel,IonCard,IonCardHeader,
          IonCardTitle,IonCardSubtitle,IonCardContent,IonContent, IonHeader,
           IonTitle, IonToolbar,IonImg, IonButton, IonButtons } from '@ionic/angular/standalone';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
  standalone: true,
  imports: [IonButtons, 
    IonButton,
    IonImg,
    IonAvatar,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule]
})
export class ParametrePage implements OnInit {
  user: any;
  constructor(private userService: UserService,private navCtrl: NavController){}

  ngOnInit() {
    this.userService.getUserInfo().subscribe((data) => {
      this.user = data.user;
    });
  }

  goToProfil() {
    this.navCtrl.navigateForward('/profil');
  }
  
  goToContact() {
    this.navCtrl.navigateForward('/contact');
  }

  goBack() {
    this.navCtrl.back();
  }
}
