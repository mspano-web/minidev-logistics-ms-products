import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

import { join } from 'path';

import {PRODUCT_PACKAGE_NAME} from "./product/product.pb"
import { AppModule } from './app.module';

/* ----------------------------------------------------- */

async function bootstrap() {

  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(ConfigService);
  const url = configService.get<string>('URL_PRODUCTS')

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: PRODUCT_PACKAGE_NAME,
      protoPath: join(__dirname, './product/product.proto'),
      url: url
    },
  };

  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions
  );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen();
}

/* ----------------------------------------------------- */

bootstrap();
