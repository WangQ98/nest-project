import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './role';

@Injectable()
export class AaaGuard implements CanActivate {

  @Inject(Reflector)
  private reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const requireRoles = this.reflector.get<Role[]>('roles', context.getHandler())

    if (!requireRoles) return true;

    const { user } = context.switchToHttp().getRequest();

    return requireRoles.some(role => user && user.roles?.includes(role));
  }
}
