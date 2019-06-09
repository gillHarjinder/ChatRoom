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

  // Get input form front and send to service.ts
  sendMessage() {
    this.chatRoomService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatRoomService
      .getMessages()
      .subscribe((message) => {
        this.messages.push(message);
      });
  }

}
