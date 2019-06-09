import { Component, OnInit } from '@angular/core';
import { ChatroomService } from '../chatroom.service';

@Component({
  selector: 'app-chatarea',
  templateUrl: './chatarea.component.html',
  styleUrls: ['./chatarea.component.css']
})
export class ChatareaComponent implements OnInit {

  message = '';
  messages = [];

  constructor(private chatRoomService: ChatroomService) { }

  sendMessage() {
    this.messages.push(this.message);
    this.chatRoomService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
  }

}
