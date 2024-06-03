import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'stepper',
    loadComponent: () => import('./stepper/stepper.page').then( m => m.StepperPage)
  },
  {
    path: 'information',
    loadComponent: () => import('./information/information.page').then( m => m.InformationPage)
  },
  {
    path: 'form-celular',
    loadComponent: () => import('./form-celular/form-celular.page').then( m => m.FormCelularPage)
  },
  {
    path: 'account-data',
    loadComponent: () => import('./account-data/account-data.page').then( m => m.AccountDataPage)
  },
  {
    path: 'terms-conditions',
    loadComponent: () => import('./terms-conditions/terms-conditions.page').then( m => m.TermsConditionsPage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: 'numeric-keyboard',
    loadComponent: () => import('./numeric-keyboard/numeric-keyboard.page').then( m => m.NumericKeyboardPage)
  },
];
