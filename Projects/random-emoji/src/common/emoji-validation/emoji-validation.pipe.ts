import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmojiValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return;
    }
    if (isNaN(Number(value))) {
      throw new BadRequestException('Index must be a number');
    }

    if (value < 0 || value > 49) {
      throw new BadRequestException('Index must be between 0 and 49');
    }

    return Number(value);
  }
}
