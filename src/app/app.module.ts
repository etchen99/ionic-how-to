import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { MyApp } from './app.component';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [MyApp],
  entryComponents: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HomePageModule, ListPageModule],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule {}
