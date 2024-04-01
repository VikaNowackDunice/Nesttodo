import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import cors from 'cors';

import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const PORT = configService.get('PORT') || configService.get('PORT_RESERVE');

  app.use(cors());
  await app.listen(PORT, ()=> console.log(`Server started on port=${PORT}`));
}
start();
