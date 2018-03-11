import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages: string[] = [];

  add(msg: string) {
    this.messages.push(msg);
  }
  clear(): void {
    this.messages = [];
  }
}
