import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { TcpContext } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToRpc()
      .getContext<TcpContext>()
      .getPattern();

    if (req) {
      return next
        .handle()
        .pipe(
          tap(() =>
            Logger.log(
              `${req} ${Date.now() - now}ms`,
              context.getClass().name,
            ),
          ),
        );
    }
  }
}
