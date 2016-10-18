import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { Videocenter } from '../providers/videocenter';
import { Server } from '../providers/server';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp extends Videocenter{
  rootPage = HomePage;
  server: Server;
  constructor(platform: Platform) {
    super();
    super.set_socket_url("http://localhost:9001/");
    this.server = new Server();
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.server.listen();
    });
  }
}
