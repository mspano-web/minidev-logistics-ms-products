import { Module } from '@nestjs/common';
import { ConfigModule,   } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';

/* ----------------------------------------------------- */

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/products'),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [],
})

/* ----------------------------------------------------- */

export class AppModule {}
