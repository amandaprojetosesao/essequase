import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { CadastroSalvarPageModule } from './cadastro/cadastro-salvar/cadastro-salvar.module';
import { AutorizarSalvarPageModule } from './autorizar/autorizar-salvar/autorizar-salvar.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, CadastroSalvarPageModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC71HfES9TFGfzpf7awf13immQBHY2ArP0",
      authDomain: "projeto-7ac2b.firebaseapp.com",
      databaseURL: "https://projeto-7ac2b.firebaseio.com",
      projectId: "projeto-7ac2b",
      storageBucket: "projeto-7ac2b.appspot.com",
      messagingSenderId: "752541182600",
      appId: "1:752541182600:web:7fcd7c19bf5f8ae6678d3d"
    }), AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
