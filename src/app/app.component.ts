import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // RouterOutlet peut rester ici
import { IonButton,IonApp, IonRouterOutlet, IonTitle, IonLabel, IonContent, IonHeader, IonToolbar, IonList, IonItem, IonCard, IonCardHeader, IonIcon, IonCardContent } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home/home.page'; 
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,

  imports: [HeaderComponent,RouterOutlet,IonButton,HomePage,RouterModule, IonButton, IonCardContent, IonIcon, IonCardHeader, IonCard, IonItem, IonList, IonToolbar, IonHeader, IonContent, IonLabel, IonTitle, IonApp, IonRouterOutlet],


})
export class AppComponent {
  constructor() {}
}
