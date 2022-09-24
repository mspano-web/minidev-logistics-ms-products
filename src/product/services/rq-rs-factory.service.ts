import { Injectable } from '@nestjs/common';

import { IRqRsFactory } from 'src/product/interfaces';
import {
  RsCreateProductDto,
  RsFindProductDto,
  RsFindProductsDto,
} from 'src/product/dto/product.dto';
import { ProductData } from '../product.pb';

/* ------------------------------------------------------- */

@Injectable()
export class RqRsFactoryService implements IRqRsFactory {
  createDTOResponse(
    status: number,
    error?: string,
    id?: string,
  ): RsCreateProductDto {
    return new RsCreateProductDto(status, error, id);
  }

  /* ------------------- */

  findAllDTOResponse(
    status: number,
    error?: string,
    data?: ProductData[],
  ): RsFindProductsDto {
    return new RsFindProductsDto(status, error, data);
  }

  /* ------------------- */

  findbyIdDTOResponse(
    status: number,
    error?: string,
    data?: ProductData,
  ): RsFindProductDto {
    return new RsFindProductDto(status, error, data);
  }
}

/* ------------------------------------------------------- */
