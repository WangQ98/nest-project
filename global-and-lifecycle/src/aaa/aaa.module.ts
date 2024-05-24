import { Global, Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

@Global()
@Module({
  exports: [AaaService],
  controllers: [AaaController],
  providers: [AaaService],
})
export class AaaModule { }
