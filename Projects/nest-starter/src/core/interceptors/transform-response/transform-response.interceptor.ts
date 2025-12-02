import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response: unknown) => {
        if (!response) {
          return { data: [] };
        }
        if (
          typeof response === 'object' &&
          response !== null &&
          'data' in response &&
          'meta' in response
        ) {
          const resp = response as { data: unknown; meta: unknown };
          return {
            data: resp.data,
            meta: resp.meta,
          };
        }
        return { data: response };
      }),
    );
  }
}
