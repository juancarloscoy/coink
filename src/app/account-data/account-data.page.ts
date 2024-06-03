import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonList, IonSelect, IonSelectOption, IonButton, IonIcon } from '@ionic/angular/standalone';
import { AccountDataService } from '../services/account-data.service';
import { LoadingController } from '@ionic/angular';
import { Document } from '../interfaces/document.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.page.html',
  styleUrls: ['./account-data.page.scss'],
  standalone: true,
  imports: [IonIcon, IonInput, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonSelect, IonSelectOption, IonButton, ReactiveFormsModule]
})
export class AccountDataPage implements OnInit {

  @Output() step3 = new EventEmitter<{}>();
  formAccountData: FormGroup;
  documentTypes: Document[] = [];

  loading: any;
  isLoading = false;
  btnDisabled = true;
  showPasswords: { [key: string]: boolean } = {
    password: false,
    confirmPassword: false
  };
  eyeIcons: { [key: string]: string } = {
    password: 'eye-outline',
    confirmPassword: 'eye-outline'
  };

  constructor(private accountDataService: AccountDataService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder
  ) {
    this.formAccountData = this.formBuilder.group({
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required, this.exactLengthValidator(10)]],
      expeditionDate: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      securityPin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      confirmSecurityPin: ['', [Validators.required, Validators.minLength(4)]]
    }, { validators: [this.matchingFields('email', 'confirmEmail', 'securityPin', 'confirmSecurityPin')] } as AbstractControlOptions);
  }

  ngOnInit() {
    this.getGenders();
  }

  matchingFields(emailKey: string, confirmEmailKey: string, securityPinKey: string, confirmSecurityPinKey: string) {
    return (group: FormGroup) => {
      let emailInput = group.controls[emailKey];
      let confirmEmailInput = group.controls[confirmEmailKey];
      let securityPinInput = group.controls[securityPinKey];
      let confirmSecurityPinInput = group.controls[confirmSecurityPinKey];
      if (emailInput.value !== confirmEmailInput.value) {
        confirmEmailInput.setErrors({ notEquivalent: true });
      } else {
        confirmEmailInput.setErrors(null);
      }
      if (securityPinInput.value !== confirmSecurityPinInput.value) {
        confirmSecurityPinInput.setErrors({ notEquivalent: true });
      } else {
        confirmSecurityPinInput.setErrors(null);
      }
    }
  }

  exactLengthValidator(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value && value.toString().length !== length ? { 'exactLength': { requiredLength: length, actualLength: value.toString().length } } : null;
    };
  }

  isFieldInvalid(field: string) {
    return !this.formAccountData.get(field)!.valid && (this.formAccountData.get(field)!.touched || this.formAccountData.get(field)?.dirty);
  }

  async getGenders() {
    const params = {
      apiKey: '030106',
    };

    this.loading = await this.loadingController.create({
      message: 'Cargando...',
    });

    await this.loading.present();

    this.accountDataService.getData('documentTypes', params).
      pipe(
        map(
          (types: Document[]) => {
            types.push({ id: 3, notation: 'CE', description: 'Cédula de Extranjería' });
            return types;
          }
        )
      )
      .subscribe({
        next: (response: Document[]) => {
          console.log('Data:', response);
          this.documentTypes = response;
          this.isLoading = false;
          this.loading.dismiss();
        },
        error: (error) => {
          console.error('Error:', error);
          this.isLoading = false;
          this.loading.dismiss();
        }
      });
  }

  submitForm() {
    if (this.formAccountData.valid) {
      console.log(this.formAccountData.value);
      this.step3.emit({ step: 'step3' });
    } else {
      Object.keys(this.formAccountData.controls).forEach(field => {
        const control = this.formAccountData.get(field);
        control!.markAsTouched({ onlySelf: true });
      });
    }
  }

  togglePasswordVisibility(field: string) {
    this.showPasswords[field] = !this.showPasswords[field];
    this.eyeIcons[field] = this.showPasswords[field] ? 'eye-off-outline' : 'eye-outline';
  }
}
