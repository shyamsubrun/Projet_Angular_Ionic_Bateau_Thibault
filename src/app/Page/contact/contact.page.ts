import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactPage  {

  contact: any;

  constructor(private http: HttpClient) {
    this.loadContactData();
  }

  loadContactData() {
    this.http.get('assets/data/listContact.json').subscribe(data => {
      this.contact = data;
    });
  }

}
