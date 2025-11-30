import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { EmojiValidationPipe } from './common/emoji-validation/emoji-validation.pipe';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEmoji(
    @Req() request: Request,
    @Query('index', EmojiValidationPipe) index?: number,
  ): { emoji: string; browser: string | undefined } {
    return {
      emoji: this.appService.getEmoji(index),
      browser: Array.isArray(request.headers.browser)
        ? request.headers.browser[0]
        : request.headers.browser,
    };
  }
}
