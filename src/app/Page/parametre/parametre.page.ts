import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar,IonList,IonItem,IonIcon,IonLabel,IonCard,IonCardHeader,
          IonCardTitle,IonCardSubtitle,IonCardContent,IonContent, IonHeader,
          IonTitle, IonToolbar,IonImg } from '@ionic/angular/standalone';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
  standalone: true,
  imports: [IonImg,IonAvatar,IonList,IonItem,IonIcon,IonLabel,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ParametrePage implements OnInit {
  user: any;
  constructor(private userService: UserService,private navCtrl: NavController,private router : Router,private http :HttpClient){}
  thibut : any
  ngOnInit() {
    this.userService.getUserInfo().subscribe((data) => {
      this.user = data.user;
      this.loadContactData();
    });
  }

  
  goToProfil() {
    this.navCtrl.navigateForward('/profil');
  }
  loadContactData() {
    this.http.get('assets/data/listContact.json').subscribe(data => {
      this.thibut = data;
    });
  }
  goToContact() {
    let navigationExtras: NavigationExtras = {
      state: {
        item:this.thibut,
        type:'contact'
      }
    }
    this.router.navigate(['/info-item'], navigationExtras);
  }
}
