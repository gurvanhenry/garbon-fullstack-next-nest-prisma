import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '🦊 garbon place 🦊';
  }

  getWelcomeMessage() {
    return {
      content: 'Wecome to garbon',
    };
  }
}
