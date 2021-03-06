import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { SleepPage } from '../pages/sleep/sleep';
import { DiaperPage } from '../pages/diaper/diaper';
import { EatPage } from '../pages/eat/eat';
import { JournalPage } from '../pages/journal/journal';
import { TabsPage } from '../pages/tabs/tabs';

import { OrderByDateCreatedPipe } from '../pipes/order-by-date-created/order-by-date-created';

import { DateComponent } from '../components/date/date';
import { BottleFormComponent } from '../components/bottle-form/bottle-form';
import { MotherFormComponent } from '../components/mother-form/mother-form';
import { StopwatchComponent } from '../components/stopwatch/stopwatch';
import { StopwatchButtonsComponent } from '../components/stopwatch-buttons/stopwatch-buttons';
import { HeaderMenuComponent } from '../components/header-menu/header-menu';


import { FIREBASE_CONFIG } from './firebase.credentials';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BottleFormProvider } from '../providers/bottle-form/bottle-form';
import { StopwatchProvider } from '../providers/stopwatch/stopwatch';

@NgModule({
  declarations: [
    MyApp,
    SleepPage,
    DiaperPage,
    EatPage,
    JournalPage,
    TabsPage,
    DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    StopwatchComponent,
    StopwatchButtonsComponent,
    HeaderMenuComponent,
    OrderByDateCreatedPipe

  ],
  imports: [
    BrowserModule,
    CustomIconsModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: "top",
      platforms: {
        ios: {
          tabsPlacement: "bottom"
        }
      }
    }),
    AngularSvgIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SleepPage,
    DiaperPage,
    EatPage,
    JournalPage,
    TabsPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BottleFormProvider,
    StopwatchProvider,
  ]
})
export class AppModule {}
