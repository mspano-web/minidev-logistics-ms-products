import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  ProductData,
  RqCreateProduct,
  RqFindProduct,
  RqFindProducts,
  RsFindProduct,
  RsFindProducts,
} from '../product.pb';

/* ----------------------------------------------------- */

export class RqFindProductDto implements RqFindProduct {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly id: string;
}

/* --------------- */

export class RqFindProductsDto implements RqFindProducts {}

/* --------------- */

export class RqCreateProductDto implements RqCreateProduct {
  @IsString()
  @IsNotEmpty()
  public readonly description: string;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly weight: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly volume: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly price: number;
}

/* --------------- */

export class RsCreateProductDto implements RsCreateProductDto {
  status: number;
  error?: string;
  id?: string;

  constructor(
    status: number,
    error?: string,
    id?: string,
  ) {
    this.status = status;
    this.error = error;
    this.id = id;
  }
}

/* --------------- */

export class RsFindProductDto implements RsFindProduct {
  status: number;
  error?: string;
  data?: ProductData;

  constructor(
    status: number,
    error?: string,
    data?: ProductData
  ) {
    this.status = status;
    this.error = error;
    this.data = data;
  }
}

/* --------------- */

export class RsFindProductsDto implements RsFindProducts {
  status: number;
  error?: string;
  data?: ProductData[];

  constructor(
    status: number,
    error?: string,
    data?: ProductData[]
  ) {
    this.status = status;
    this.error = error;
    this.data = data;
  }
}

/* ----------------------------------------------------- */
