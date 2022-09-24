import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { ProductDocument, Product } from './schemas/product.schema';
import { RqCreateProduct, RqFindProduct } from './product.pb';

/* --------------------------------------------------- */

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  /* ----------------- */

  public async createProduct(payload: RqCreateProduct) {
    const newProduct = new this.productModel(payload);
    return (await newProduct.save())._id;
  }

  /* ----------------- */

  public async findAll() {
    return await this.productModel.find({});
  }

  /* ----------------- */

  public async findOne(payload: RqFindProduct) {
    return await this.productModel.findById(payload.id);
  }
  
}

/* --------------------------------------------------- */
