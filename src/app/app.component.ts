import { Component } from '@angular/core';
import { IonHeader,IonToolbar,IonTitle,IonButtons,IonIcon,IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonHeader,IonToolbar,IonTitle,RouterModule,IonButtons,IonIcon,IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
