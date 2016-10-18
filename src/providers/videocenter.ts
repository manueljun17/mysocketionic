/// <reference path="../d.ts/rmc3.d.ts" />
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the Videocenter provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Videocenter {
static socket:any = false;
static connection;
static socketUrl;
  constructor() {
    console.log('Hello Videocenter Provider');
    Videocenter.connection = new RTCMultiConnection();
  }
  set_socket_url( url : string ) : void {
        Videocenter.socketUrl = url;
  }
  get_socket() : void {
        if ( Videocenter.socket === false ) {
            Videocenter.connection.socketURL = Videocenter.socketUrl;
            Videocenter.socket = Videocenter.connection.getSocket();
        }
        return Videocenter.socket;
  }
}
