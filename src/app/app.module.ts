import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgServiceWorker, ServiceWorkerModule} from '@angular/service-worker'

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-store'}),
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule,
    RouterModule.forRoot([
      {path: '' , loadChildren: 'app/home/home.module#HomeModule', pathMatch: 'full'},
      {path: 'pictures', loadChildren: 'app/pictures/pictures.module#PicturesModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(sw: NgServiceWorker) {
    /*sw.registerForPush({
      applicationServerKey: "wefwef"
    }).subscribe(sub => {
      console.log(sub.toJSON());
    });

    sw.push.subscribe(( notifcation)=> {
      console.log("got a push", notifcation);
    });*/
  }
}
