import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger(`AppService`);
  getHello() {
    this.logger.log(`calling log from getHello`);
    return undefined;
  }
}
