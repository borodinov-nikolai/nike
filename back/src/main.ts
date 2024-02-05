import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';



async function start() {
  console.log('JWT_SECRET in process.env:', process.env.JWT_SECRET);
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule);
  
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
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, ()=> console.log(`server started at ${PORT}`));
}
start();
