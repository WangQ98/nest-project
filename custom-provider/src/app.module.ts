import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService
    },
    {
      provide: "app_service",
      useClass: AppService
    },
    {
      provide: "person",
      useValue: {
        name: 'wq',
        age: 18
      }
    },
    {
      provide: 'person2',
      useFactory() {
        return {
          name: 'bbb',
          desc: 'cccc'
        }
      }
    },
    {
      provide: 'person3',
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello()
        }
      },
      inject: ['person', AppService]
    },
    {
      provide: 'person4',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        return {
          name: 'bbb',
          desc: 'cccc'
        }
      },
    },
  ],
})
export class AppModule { }
