import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { provideRouter, PreloadAllModules, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  imports: [BrowserModule, AuthModule, HttpClientModule, IonicModule.forRoot()],
  providers: [
    HttpClientModule,
    provideRouter(routes, withPreloading(PreloadAllModules))
  ],

})
export class AppModule { }