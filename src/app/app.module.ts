import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from "../pages/settings/settings";
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from "ng2-translate";
import { HttpModule, Http } from '@angular/http';
import { BackgroundMode } from "@ionic-native/background-mode";
import { Insomnia } from "@ionic-native/insomnia";
import { Brightness } from "@ionic-native/brightness";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrowserModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, SplashScreen, BackgroundMode, Insomnia, Brightness]
})
export class AppModule { }
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
