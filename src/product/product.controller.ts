import { Controller, HttpStatus, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IRqRsFactory, RQ_RS_FACTORY_SERVICE } from 'src/product/interfaces';

import {
  RqCreateProductDto,
  RsCreateProductDto,
  RsFindProductDto,
  RsFindProductsDto,
} from './dto/product.dto';
import { PRODUCT_SERVICE_NAME, RqFindProduct } from './product.pb';
import { ProductService } from './product.service';

/* ------------------------------------------------------- */

@Controller()
export class ProductController {
  constructor(
    private readonly productService: ProductService,

    @Inject(RQ_RS_FACTORY_SERVICE)
    private readonly rqRsFactoryService: IRqRsFactory,
  ) {}

  /* ----------------- */

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'GetProducts')
  async getProducts(): Promise<RsFindProductsDto> {
    let rsFindProductsDto: RsFindProductsDto = null;

    try {
      const rsp = await this.productService.findAll();
      if (rsp) {
        rsFindProductsDto = this.rqRsFactoryService.findAllDTOResponse(
          HttpStatus.OK,
          '',
          rsp,
        );
      } else {
        rsFindProductsDto = this.rqRsFactoryService.findAllDTOResponse(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Find Products Fail!',
          null,
        );
      }
    } catch (e) {
      rsFindProductsDto = this.rqRsFactoryService.findAllDTOResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Find Products Fail!',
        null,
      );
    }
    console.log('[ms-products-get-all][controller] (', rsFindProductsDto, ')');

    return rsFindProductsDto;
  }

  /* ----------------- */

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'CreateProduct')
  async createProduct(
    payload: RqCreateProductDto,
  ): Promise<RsCreateProductDto> {
    let rsCreateProductDto: RsCreateProductDto = null;

    try {
      const rsp = await this.productService.createProduct(payload);
      rsCreateProductDto = this.rqRsFactoryService.createDTOResponse(
        HttpStatus.CREATED,
        '',
        rsp,
      );
    } catch (e) {
      rsCreateProductDto = this.rqRsFactoryService.createDTOResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Create Product Fail!',
        null,
      );
    }
    console.log('[ms-products-create][controller] (', rsCreateProductDto, ')');

    return rsCreateProductDto;
  }

  /* ----------------- */

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'GetProduct')
  async getProduct(payload: RqFindProduct): Promise<RsFindProductDto> {
    let rsFindProductDto: RsFindProductDto = null;

    try {
      const rsp = await this.productService.findOne(payload);
      if (rsp !== null) {
        rsFindProductDto = this.rqRsFactoryService.findbyIdDTOResponse(
          HttpStatus.OK,
          '',
          rsp,
        );
      } else {
        rsFindProductDto = this.rqRsFactoryService.findbyIdDTOResponse(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Find Product Fail!',
          null,
        );
      }
    } catch (e) {
      rsFindProductDto = this.rqRsFactoryService.findbyIdDTOResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Find Product Fail!',
        null,
      );
    }

    console.log('[ms-products-get-by-id][controller] (', rsFindProductDto, ')');
    return rsFindProductDto;
  }
}

/* ------------------------------------------------------- */
