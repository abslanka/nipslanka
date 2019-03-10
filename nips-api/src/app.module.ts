import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { InjectConfig } from 'nestjs-config';
import { AppConfigModule } from './config';
import { AppController } from './app.controller';
import { DbModule } from './adapters/db/db.module';
import { EmployerModule } from './usecases/employer/employer.module';
import { AppReqLoggerMiddleware } from 'app.req-logger.middleware';
import { ContactController } from './usecases/common/contact/contact.controller';
import { CommonModule } from './usecases/common/common.module';
import { JobSeekerModule } from './usecases/job-seeker/job-seeker.module';

@Module({
  imports: [
    AppConfigModule.forRoot(),
    DbModule.forRoot(),
    EmployerModule,
    CommonModule,
    JobSeekerModule,
  ],
  controllers: [AppController, ContactController],
})
export class AppModule implements NestModule {
  constructor(@InjectConfig() config) {
    //console.log('AppModule config.get(db.config)', config.get('db.config'));
    //console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppReqLoggerMiddleware).forRoutes('/');
  }
}
