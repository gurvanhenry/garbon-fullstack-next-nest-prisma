import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWelcomeMessage() {
    return {
      title: 'Wecome to garbonfact',
    };
  }
}
