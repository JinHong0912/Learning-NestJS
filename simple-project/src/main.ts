import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

export const SERVER = config.get('server');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  const port = SERVER.port;
  await app.listen(port);

  logger.log(`Application Running on Port ${port}`);
}
bootstrap();
