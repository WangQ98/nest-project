import { Controller, Get, Headers, ParseIntPipe, Query, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders } from './headers.decorator';
import { MyQuery } from './query.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('hello2', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('hello4')
  getHello4(@Ccc() c): string {
    return c;
  }

  @Get('hello5')
  getHello5(@Headers('Accept') header1, @MyHeaders('Accept') header2) {
    console.info('🚀 ~ log:header1 ----->', header1);
    console.info('🚀 ~ log:header2 ----->', header2);
  }


  @Get('hello6')
  getHello6(@Query('aaa', new ParseIntPipe()) aaa, @MyQuery('bbb', new ParseIntPipe()) bbb) {
    console.info('🚀 ~ log:aaa ----->', aaa + 1);
    console.info('🚀 ~ log:bbb ----->', bbb + 1);
    return { aaa, bbb };
  }
}
