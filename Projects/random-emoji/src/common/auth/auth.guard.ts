import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { LoggerService } from 'src/logger.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly logger: LoggerService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.info('AuthGuard: Checking authentication');

    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers['x-api-key'];

    if (apiKey !== 'SECRET_API_KEY') {
      this.logger.error('AuthGuard: Authentication failed');
      return false;
    }

    this.logger.info('AuthGuard: Authentication successful');

    return true;
  }
}
