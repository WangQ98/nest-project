import { Module, OnApplicationBootstrap, OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';

@Module({
  controllers: [DddController],
  providers: [DddService],
})
export class DddModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  onModuleInit() {
    console.log('DddModule OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('DddModule OnApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('DddModule OnModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('DddModule BeforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('DddModule OnApplicationShutdown');
  }
}
