import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatarea',
  templateUrl: './chatarea.component.html',
  styleUrls: ['./chatarea.component.css']
})
export class ChatareaComponent implements OnInit {

  displayArea = 'Display Area Works!';
  inputArea = 'Input Arera Works!';

  inputValue = '';

  inputData(value: string) {
    this.inputValue = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
