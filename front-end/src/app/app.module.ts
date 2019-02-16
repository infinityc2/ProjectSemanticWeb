import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CardListPage } from '../pages/card-list/card-list';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { TypePage } from './../pages/type/type';
import { ClassPage } from './../pages/class/class';
import { RarityPage } from './../pages/rarity/rarity';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProvider } from '../providers/service/service';
import { ManacostPage } from '../pages/manacost/manacost';

@NgModule({
  declarations: [
    MyApp,
    CardListPage,
    ContactPage,
    HomePage,
    TabsPage,
    RarityPage,
    ClassPage,
    TypePage,
    ManacostPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardListPage,
    ContactPage,
    HomePage,
    TabsPage,
    RarityPage,
    ClassPage,
    TypePage,
    ManacostPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
