import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyApp } from './app.component';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [MyApp, HomePage, ListPage],
  entryComponents: [MyApp, HomePage, ListPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule {}
