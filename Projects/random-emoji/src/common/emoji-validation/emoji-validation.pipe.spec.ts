import { BadRequestException } from '@nestjs/common';
import { EmojiValidationPipe } from './emoji-validation.pipe';

describe('EmojiValidationPipe', () => {
  const emojiPipe = new EmojiValidationPipe();

  it('should be defined', () => {
    expect(emojiPipe).toBeDefined();
  });

  it('should return undefined if no value is provided', () => {
    const result: unknown = emojiPipe.transform(undefined);
    expect(result).toBeUndefined();
  });

  it('should throw BadRequestException if value is not a number', () => {
    const result = (): unknown => emojiPipe.transform('not-a-number');
    expect(result).toThrow(BadRequestException);
  });

  it('should throw BadRequestException if value is less than 0', () => {
    const result = (): unknown => emojiPipe.transform(-1);
    expect(result).toThrow(BadRequestException);
  });

  it('should throw BadRequestException if value is greater than 49', () => {
    const result = (): unknown => emojiPipe.transform(50);
    expect(result).toThrow(BadRequestException);
  });

  it('should return the number if it is valid', () => {
    const result: unknown = emojiPipe.transform('25');
    expect(result).toBe(25);
  });
});
