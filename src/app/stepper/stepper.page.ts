import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadio, IonLabel, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonLabel, IonRadio, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StepperPage implements OnChanges {

  @Input() isActive = {
    title: '',
    step2: false,
    step3: false
  }
  // @Input() title = '';

  step1 = "step1";
  step2 = "step2";
  step3 = "step3";

  step2Enabled = false;
  step3Enabled = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['isActive'].currentValue.step2 && changes['isActive'].currentValue.title && !changes['isActive'].currentValue.step3) {
      console.log('Input value changed:', changes['isActive'].currentValue);
      this.step2Enabled = this.isActive.step2;
    } else if (changes['isActive'].currentValue.step3) {
      this.step3Enabled = this.isActive.step3;
    }
  }
}
