import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class MapTestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 对响应数据做修改，一般都是改成 {code, data, message} 的格式
    return next.handle().pipe(map(data => {
      return {
        code: 200,
        message: 'success',
        data
      }
    }))
  }
}
