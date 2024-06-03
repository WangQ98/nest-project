import { Body, Controller, DefaultValuePipe, Get, HttpException, HttpStatus, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseFloatPipe, ParseIntPipe, ParseUUIDPipe, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';
import { Ooo } from './dto/ooo.dto';
import { MyValidationPipe } from './my-validation.pipe';
import { Ppp } from './dto/ppp.dto';

enum Wq {
  AAA = '111',
  BBB = '222'
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query('aa', new ParseIntPipe({
    errorHttpStatusCode: HttpStatus.NOT_FOUND
  })) aa: string): string {
    return aa + 1;
  }

  @Get('bb')
  bb(@Query('aa', new ParseIntPipe({
    exceptionFactory: (msg) => {
      console.info('🚀 ~ log:msg ----->', msg);
      throw new HttpException('xxx' + msg, HttpStatus.NOT_IMPLEMENTED)
    }
  })) aa: string): string {
    return aa + 1;
  }

  @Get('cc')
  cc(@Query('cc', ParseFloatPipe) cc: number) {
    return cc + 1;
  }

  @Get('dd')
  dd(@Query('dd', ParseBoolPipe) dd: boolean) {
    return typeof dd
  }

  @Get('ee')
  ee(@Query('ee', new ParseArrayPipe({
    items: Number
  })) ee: Array<number>) {
    return ee.reduce((total, item) => total + item, 0)
  }

  @Get('ff')
  ff(@Query('ff', new ParseArrayPipe({
    separator: '..',
    optional: true
  })) ff: Array<string>) {
    return ff
  }

  @Get('gg/:enum')
  gg(@Param('enum', new ParseEnumPipe(Wq)) e: Wq) {
    return e;
  }

  @Get('hh/:uuid')
  hh(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return uuid;
  }

  @Get('kkk')
  kkk(@Query('kkk', new DefaultValuePipe('aaa')) kkk: string) {
    return kkk;
  }

  @Get('nnn/:bbb')
  nnn(@Query('aaa', AaaPipe) aaa: string, @Param('bbb', AaaPipe) bbb: number) {
    return aaa + bbb;
  }

  @Get('ooo')
  ooo(@Body(new ValidationPipe()) obj: Ooo) {
    console.info('🚀 ~ log:obj ----->', obj);
  }

  @Get('ppp')
  ppp(@Body() post: Ppp) {
    return post;
  }
}
