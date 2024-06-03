import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/angular/standalone';
import { NumericKeyboardPage } from '../numeric-keyboard/numeric-keyboard.page';

@Component({
  selector: 'app-form-celular',
  templateUrl: './form-celular.page.html',
  styleUrls: ['./form-celular.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, NumericKeyboardPage]
})
export class FormCelularPage {

  @Output() numberTel = new EventEmitter<string>;
  myForm: FormGroup;
  step2 = false;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  get telefono() { return this.myForm?.get('telefono'); }


  handleNumberClick(number: number) {
    const currentNumber = this.myForm.get('telefono')!.value;
    if (currentNumber.length < 10) {
      this.myForm.get('telefono')!.setValue(currentNumber + number.toString());
    }

  }

  handleDeleteClick() {
    const currentNumber = this.myForm.get('telefono')!.value;
    this.myForm.get('telefono')!.setValue(currentNumber.slice(0, -1));
  }

  handleEnterClick() {
    if (this.myForm.valid) {
      this.step2 = true;
      console.log(this.telefono?.value);
      this.numberTel.emit(this.telefono?.value);
    }
  }

}
