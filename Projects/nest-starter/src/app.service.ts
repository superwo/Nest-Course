import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';

@Injectable()
export class AppService {
  private context = 'AppService';
  constructor(private readonly logger: LoggerService) {}

  getHello() {
    this.logger.log('Hello endpoint was called', this.context, {
      method: 'getHello',
      status: 'success',
    });
    return 'Hello World!';
  }
}
