import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';



async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000
  
  const corsOptions: CorsOptions = {
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 204,
  };

  app.enableCors(corsOptions);
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder().setTitle('nike').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.use(cookieParser());
  await app.listen(PORT, ()=> console.log(`server started at ${PORT}`));
}
start();
