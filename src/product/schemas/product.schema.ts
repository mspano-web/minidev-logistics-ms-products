import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaMoongose } from 'mongoose';

export type ProductDocument = Product & Document

@Schema()
export class Product {

  _id:  { type: string, default: SchemaMoongose.Types.ObjectId, required: true };

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  volume: number;

  @Prop({ required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);