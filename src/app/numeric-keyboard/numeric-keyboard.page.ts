import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-numeric-keyboard',
  templateUrl: './numeric-keyboard.page.html',
  styleUrls: ['./numeric-keyboard.page.scss'],
  standalone: true,
  imports: [IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonButton, IonIcon]
})
export class NumericKeyboardPage {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  @Output() numberClick = new EventEmitter<number>();
  @Output() deleteClick = new EventEmitter<void>();
  @Output() enterClick = new EventEmitter<void>();

  @Input() enabledBtn = false;

  onNumberClick(number: number) {
    this.numberClick.emit(number);
  }

  onDeleteClick() {
    this.deleteClick.emit();
  }

  onEnterClick() {
    this.enterClick.emit();
  }

}
