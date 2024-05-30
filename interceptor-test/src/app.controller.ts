import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaInterceptor } from './aaa.interceptor';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';
import { CatchErrorTestInterceptor } from './catch-error-test.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseInterceptors(AaaInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  aaa() {
    return 'aaa'
  }

  @Get('bbb')
  @UseInterceptors(TapTestInterceptor)
  bbb() {
    return 'bbb'
  }

  @Get('ccc')
  @UseInterceptors(CatchErrorTestInterceptor)
  ccc() {
    return 'ccc'
  }

  @Get('ddd')
  @UseInterceptors(TimeoutInterceptor)
  async ddd() {
    await new Promise(resolve => setTimeout(resolve, 4000))
    return 'ddd'
  }

  @Get('eee')
  eee() {
    return 'eee'
  }
}
