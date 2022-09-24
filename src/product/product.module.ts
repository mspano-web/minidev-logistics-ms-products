import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from './schemas/product.schema';

import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { RqRsFactoryService } from 'src/product/services/rq-rs-factory.service';
import { RQ_RS_FACTORY_SERVICE } from 'src/product/interfaces';

/* --------------------------------------------------- */

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      useClass: RqRsFactoryService, // You can switch useClass to different implementation
      provide: RQ_RS_FACTORY_SERVICE,
    },
  ],
})

/* --------------------------------------------------- */
export class ProductModule {}
