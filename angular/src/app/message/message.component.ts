import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  template: '<div>{{ message }}</div>',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message = 'Hello, world!';
}
