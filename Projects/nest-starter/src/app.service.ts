import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const environmentVariable = this.configService.get<string>('environment');
    console.log(`Current Environment: ${environmentVariable}`);

    return 'Hello World!';
  }
}
