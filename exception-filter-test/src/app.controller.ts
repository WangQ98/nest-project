import { BadGatewayException, BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaDto } from './aaa.dto';
import { HelloFilter } from './hello.filter';
import { UnLoginException } from './unlogin.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST)
    throw new UnLoginException('yyy')
    return this.appService.getHello();
  }

  @Post('aaa')
  aaa(@Body() aaaDto: AaaDto) {
    return 'success';
  }
}
