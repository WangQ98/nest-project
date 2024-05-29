import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AaaInterceptor implements NestInterceptor {

  @Inject(Reflector)
  private reflector: Reflector;

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.info('🚀 ~ log:intercept ----->',);
    console.info(this.reflector.get('roles', context.getHandler()));
    console.info(this.reflector.get('roles', context.getClass()));

    console.info('🚀 ~ log:getAll ----->', this.reflector.getAll('roles', [context.getClass(), context.getHandler()]));
    console.info('🚀 ~ log:getAllAndMerge ----->', this.reflector.getAllAndMerge('roles', [context.getClass(), context.getHandler()]));
    console.info('🚀 ~ log:getAllAndOverride ----->', this.reflector.getAllAndOverride('roles', [context.getClass(), context.getHandler()]));
    return next.handle();
  }
}
