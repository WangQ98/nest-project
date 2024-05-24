import { Controller, Get, HttpCode, Next, Redirect, Render, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hello() {
    return 'hello';
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.info('🚀 ~ log:req ----->', req.hostname, req.url);
  }

  @Get('ddd')
  ddd(@Res({ passthrough: true }) res: Response) {
    return 'ddd'
  }

  @Get('eee')
  eee(@Next() next: NextFunction) {
    console.info('🚀 ~ log: handler1----->',);
    next();
    return '111'
  }

  @Get('eee')
  eee2() {
    console.info('🚀 ~ log: handler2----->',);
    return 'eee'
  }

  @Get('fff')
  @HttpCode(222)
  fff() {
    return 'fff'
  }

  @Get('hhh')
  @Redirect('http://juejin.cn')
  hhh() { }

  @Get('xxx')
  @Redirect()
  jump() {
    return {
      url: 'http://juejin.cn',
      statusCode: 302
    }
  }

  @Get('user')
  @Render('user')
  user() {
    return {
      name: "WQ",
      age: 18
    }
  }
}
