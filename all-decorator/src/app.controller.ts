import { Controller, Get, Headers, Ip, Session, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';

@Controller()
@SetMetadata('rules', ['user'])
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseGuards(AaaGuard)
  @SetMetadata('rules', ['admin'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ccc')
  header(@Headers('Accept') accept: string, @Headers() headers: Record<string, any>) {
    return headers;
  }

  @Get('/ip')
  getIp(@Ip() ip: string) {
    console.info('🚀 ~ log:ip ----->', ip);
    return ip;
  }

  @Get('/session')
  session(@Session() session) {
    if (!session.count) {
      session.count = 0;
    }
    session.count += 1;
    return session.count;
  }
}
