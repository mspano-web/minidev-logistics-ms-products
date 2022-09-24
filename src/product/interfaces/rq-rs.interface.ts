import {
  RsCreateProductDto,
  RsFindProductDto,
  RsFindProductsDto,
} from 'src/product/dto/product.dto';
import { ProductData } from '../product.pb';

//   interface and provide that token when injecting to an interface type.
export const RQ_RS_FACTORY_SERVICE = 'RQ_RS_FACTORY_SERVICE';

/* ----------------------------------------------------- */

export interface IRqRsFactory {
  createDTOResponse(
    status: number,
    error?: string,
    id?: string,
  ): RsCreateProductDto;

  /*  --------------- */

  findAllDTOResponse(
    status: number,
    error?: string,
    data?: ProductData[],
  ): RsFindProductsDto;

  /*  --------------- */

  findbyIdDTOResponse(
    status: number,
    error?: string,
    data?: ProductData,
  ): RsFindProductDto;
}

/*  -------------------------------------------------- */
