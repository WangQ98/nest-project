import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, TimeoutError, catchError, throwError, timeout } from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 处理响应超时的情况，抛出一个 TimeoutError，配合 catchErrror 可以返回超时的响应
    return next.handle().pipe(
      timeout(3000),
      catchError(err => {
        if (err instanceof TimeoutError) {
          return throwError(() => new HttpException('xxx', HttpStatus.FOUND))
        }
        return throwError(() => err)
      })
    )
  }
}
