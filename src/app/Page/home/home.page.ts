import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon,IonList,IonToggle,IonItem,IonLabel,IonSelect,IonSelectOption,IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter } from '@ionic/angular/standalone';
import {RouterLink} from '@angular/router';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  imports: [IonFooter, TabsComponent,RouterLink,IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonList, IonToggle,
    IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) { }
  
  onGoToListAll() {
    console.log('TEST FROMonGoToListAll');
    this.router.navigate(['/list-all']);
  }
}
