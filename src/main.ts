import { NestFactory } from '@nestjs/core';
import cors from 'cors';

import { AppModule } from './app.module';

async function start() {
  const PORT =process.env.PORT || 5006
  const app = await NestFactory.create(AppModule);
  
  app.use(cors());
  await app.listen(PORT, ()=> console.log(`Server started on port=${PORT}`));
}
start();
