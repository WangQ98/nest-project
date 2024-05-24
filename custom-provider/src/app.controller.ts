import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;

  @Inject('person')
  private readonly person: { name: string, age: number };

  @Inject('person2')
  private readonly person2: { name: string, desc: string };

  @Inject('person3')
  private readonly person3: { name: string, desc: string };

  @Inject('person4')
  private readonly person4: { name: string, desc: string };

  @Get()
  getHello(): string {
    console.info('🚀 ~ log:this.person ----->', this.person);
    console.info('🚀 ~ log:this.person2 ----->', this.person2);
    console.info('🚀 ~ log:this.person3 ----->', this.person3);
    console.info('🚀 ~ log:this.person4 ----->', this.person4);
    return this.appService.getHello();
  }
}
