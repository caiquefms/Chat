import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';


import { FirebaseAppConfig,AngularFireModule } from 'angularfire2';

const firebaseAppConfig: FirebaseAppConfig= {
  apiKey: "AIzaSyCAs3c5Syjz5f7N2Qx1NOhEXqzx-7kkm_c",
  authDomain: "chat-firebase-c1518.firebaseapp.com",
  databaseURL: "https://chat-firebase-c1518.firebaseio.com",
  storageBucket: "chat-firebase-c1518.appspot.com",
  messagingSenderId: "849247638719"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
