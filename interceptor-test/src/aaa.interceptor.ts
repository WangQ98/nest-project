import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class AaaInterceptor implements NestInterceptor {

  constructor(private appService: AppService) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.info('🚀 ~ log: ----->', this.appService.getHello());

    const now = Date.now()

    return next.handle().pipe(
      // 不修改响应数据，执行一些额外逻辑，比如记录日志、更新缓存等vs
      tap(() => console.log(`After... ${Date.now() - now}ms`)),
    )
  }
}
