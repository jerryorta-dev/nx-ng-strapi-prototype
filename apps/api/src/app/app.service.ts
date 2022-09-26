import { Injectable } from '@nestjs/common';
import { Message } from '@nx-ng-strapi-prototype/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
