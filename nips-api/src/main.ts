import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

import { ResponseInterceptor, ErrorsInterceptor } from 'adapters/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ? +process.env.PORT : 3000;
  app.enableCors();
  app.useGlobalInterceptors(new ResponseInterceptor(), new ErrorsInterceptor());

  await app.listen(port, () => {
    Logger.log(
      `NIPS Lanka - Online Recruitment Services API is listening on http://localhost:${port}`,
    );
  });

  //await app.listen(3000);
}
bootstrap();
