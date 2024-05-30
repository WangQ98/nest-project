import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class CatchErrorTestInterceptor implements NestInterceptor {

  private readonly logger = new Logger(CatchErrorTestInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 在 exception filter 之前处理抛出的异常，可以记录或者抛出别的异常
    return next.handle().pipe(
      catchError(err => {
        this.logger.error(err.message, err.stack);
        return throwError(() => err)
      })
    )
  }
}
