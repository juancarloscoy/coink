import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonIcon, IonSegmentButton, IonSegment, IonRadio, IonRadioGroup, IonLabel, IonItem, IonInput } from '@ionic/angular/standalone';
import { StepperPage } from "../../stepper/stepper.page";
import { InformationPage } from 'src/app/information/information.page';
import { FormCelularPage } from 'src/app/form-celular/form-celular.page';
import { AccountDataPage } from 'src/app/account-data/account-data.page';
import { TermsConditionsPage } from 'src/app/terms-conditions/terms-conditions.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonLabel, IonRadioGroup, IonRadio, IonSegment, IonSegmentButton,
    IonIcon, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, FormCelularPage,
    TermsConditionsPage, CommonModule, FormsModule, StepperPage, AccountDataPage, InformationPage, ReactiveFormsModule]
})
export class RegisterPage {

  showPage = true;
  showPage2 = false;
  showPage3 = false;
  step2 = false;
  texts = [{ title: '', subtitle: 'Para comenzar, por favor ingresa tu número celular.' }];
  imageSrc = '../../../assets/Oink-M.png';
  activeSteps = {
    title: 'NÚMERO CELULAR',
    step2: false,
    step3: false
  };

  getNumber(event: any) {
    if (event) {
      this.texts = [{ title: '¿CUÁLES SON TUS DATOS?', subtitle: 'Ahora necesitamos saber algunos datos tuyos' }];
      this.activeSteps = {
        title: 'DATOS DE CUENTA',
        step2: true,
        step3: false

      }
      this.showPage = false;
      this.showPage2 = true;
    }
  }

  getStep(data: any) {
    this.imageSrc = '../../../assets/OinkPolicia.png';
    this.texts = [{ title: 'ESTAS MUY CERCA DE SER PARTE DE COINK.', subtitle: 'Solo es necesario que leas detenidamente el contrato que se encuentra al final de esta pantalla y lo aceptes.' }];
    this.activeSteps = {
      title: 'FINALIZAR',
      step2: true,
      step3: true

    }
    this.showPage = false;
    this.showPage2 = false;
    this.showPage3 = true;
  }
}
