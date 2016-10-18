import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { Chat } from '../providers/chat';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp{
  rootPage = HomePage;
  chat;
  constructor(platform: Platform) {    
    this.chat = new Chat("http://localhost:9001/");
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.chat.start();
    });
  }
}
