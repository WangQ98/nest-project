import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class AaaMiddleware implements NestMiddleware {

  @Inject(AppService)
  private readonly appService: AppService;

  use(req: Request, res: Response, next: () => void) {
    console.info('🚀 ~ log:before ----->',);
    console.log('-------' + this.appService.getHello());
    next();
    console.info('🚀 ~ log:after ----->',);
  }
}
