import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CustomIconsModule } from 'ionic2-custom-icons';

import { SleepPage } from '../pages/sleep/sleep';
import { DiaperPage } from '../pages/diaper/diaper';
import { EatPage } from '../pages/eat/eat';
import { TabsPage } from '../pages/tabs/tabs';

import { DateComponent } from '../components/date/date';
import { TimerComponent } from '../components/timer/timer';
import { TimerButtonsComponent } from '../components/timer-buttons/timer-buttons';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TimerProvider } from '../providers/timer/timer';

@NgModule({
  declarations: [
    MyApp,
    SleepPage,
    DiaperPage,
    EatPage,
    TabsPage,
    DateComponent,
    TimerComponent,
    TimerButtonsComponent
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
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SleepPage,
    DiaperPage,
    EatPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TimerProvider
  ]
})
export class AppModule {}
