import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon, IonList, IonToggle, IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';  
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonFooter, TabsComponent, RouterLink,
     IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonList,
      IonToggle, IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader, IonToolbar,
       IonTitle, IonContent],
})
export class HomePage implements OnInit {
  totalItems: number = 0; 

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.totalItems$.subscribe(count => {
      this.totalItems = count;
    });
  }

  onGoToListAll() {
    this.router.navigate(['/list-all']);
  }
}
