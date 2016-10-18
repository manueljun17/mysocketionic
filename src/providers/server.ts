import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Videocenter } from './videocenter';
/*
  Generated class for the Server provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Server extends Videocenter{
  static socket:any = false;
  constructor() {
    super();
    console.log('Hello Server Provider');
    Server.socket = super.get_socket();  
  }
  listen(): void {
    console.log("Listen to Server");
    Server.socket.on('message', ()=> {
      console.log("MESSAGE");
    });
  }

}
