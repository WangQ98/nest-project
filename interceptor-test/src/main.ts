import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MapTestInterceptor } from './map-test.interceptor';
import { AaaInterceptor } from './aaa.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useGlobalInterceptors(new AaaInterceptor())
  await app.listen(3000);
}
bootstrap();
