import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  private context = 'AppService';
  constructor(
    private readonly logger: LoggerService,
    private readonly databaseService: DatabaseService,
  ) {}

  async getHello() {
    this.logger.log('Hello endpoint was called', this.context, {
      method: 'getHello',
      status: 'success',
    });
    await this.databaseService.user.findMany();
    return 'Hello World!';
  }
}
