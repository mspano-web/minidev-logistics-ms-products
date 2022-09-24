/* eslint-disable @typescript-eslint/no-empty-interface */

export const PRODUCT_PACKAGE_NAME = 'product';
export const PRODUCT_SERVICE_NAME = 'ProductServices';

/* --------------- */

export interface ProductData {
  id?: string;
  description: string;
  weight: number;
  volume: number;
  price: number;
}

/* --------------- */

export interface RqFindProduct {
  id: string;
}

/* --------------- */

export interface RsFindProduct {
  status: number;
  error?: string;
  data?: ProductData;
}
/* --------------- */

export interface RqFindProducts {}

/* --------------- */

export interface RsFindProducts {
  status: number;
  error?: string;
  data?: ProductData[];
}

/* --------------- */

export interface RqCreateProduct {
  description: string;
  weight: number;
  volume: number;
  price: number;
}

/* --------------- */

export interface RsCreateProduct {
  status: number;
  error?: string;
  id?: string;
}

/* --------------- */
