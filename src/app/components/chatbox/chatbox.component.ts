// chatbox.component.ts
import { Component,Injectable } from '@angular/core';
import { OpenaiService } from '../../openai.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent {
  userInput: string = '';
  aiResponse: string = '';

  constructor(private openaiService: OpenaiService) {}

  async sendMessage() {
    // Send user query to OpenAI service and get response
    this.aiResponse = await this.openaiService.getAIResponse(this.userInput);
  }
}
