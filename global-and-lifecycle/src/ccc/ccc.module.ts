import { Module, OnApplicationBootstrap, OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(private moduleRef: ModuleRef) { }

  onModuleInit() {
    console.log('CccModule OnModuleInit');
  }

  onModuleDestroy() {
    console.log('CccModule OnModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('CccModule BeforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    const cccService = this.moduleRef.get<CccService>(CccService);
    console.info('🚀 ~ log: ----->', cccService.findAll());
    console.log('CccModule OnApplicationShutdown');
  }

  onApplicationBootstrap() {
    console.log('CccModule OnApplicationBootstrap');
  }
}
