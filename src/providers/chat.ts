import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Videocenter } from './videocenter';
import { Server } from './server';
/*
  Generated class for the Chat provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Chat extends Videocenter{
  server: Server;
  constructor( url: string ) {
    console.log('Hello Chat Provider');
    super();
    super.set_socket_url(url);
    this.server = new Server();
  }
  start() {
    this.server.listen();
  }
  

}
