import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageService } from './message.service';
import { Message as MessageModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messageService: MessageService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('message')
  getMessage() {
    return this.appService.getWelcomeMessage();
  }

  @Post('message')
  async createMessage(
    @Body() messageData: { content: string },
  ): Promise<MessageModel> {
    const { content } = messageData;
    return this.messageService.createMessage({ content });
  }

  @Get('message-from-db')
  async getMessageFromDb(): Promise<MessageModel> {
    const messages = await this.messageService.messages({});
    const message = messages[0];
    return message;
  }
}
