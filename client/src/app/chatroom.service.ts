import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class ChatroomService {

  // url where socket io is runnung
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message){
    this.socket.emit('new-message', message);
  }

}
