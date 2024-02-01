import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';




async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000
  await app.listen(PORT, ()=> console.log(`server started at ${PORT}`));
}
start();
