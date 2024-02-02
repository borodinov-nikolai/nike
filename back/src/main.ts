import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';




async function start() {
  const app = await NestFactory.create(AppModule);
  
  const corsOptions: CorsOptions = {
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 204,
  };

  app.enableCors(corsOptions);

  app.setGlobalPrefix('api')
  const PORT = process.env.PORT || 5000
  await app.listen(PORT, ()=> console.log(`server started at ${PORT}`));
}
start();
