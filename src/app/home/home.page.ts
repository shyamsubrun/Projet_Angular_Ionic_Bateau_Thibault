import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon,IonList,IonToggle,IonItem,IonLabel,IonSelect,IonSelectOption,IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonList, IonToggle,
    IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) { }
  
  onGoToListAll() {
    this.router.navigate(['/list-all']);
  }
}
