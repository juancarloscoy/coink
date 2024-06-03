import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonImg, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {


  constructor(private router: Router) { }

  navigateRegister() {
    this.router.navigate(['/auth/register']);
  }

}
