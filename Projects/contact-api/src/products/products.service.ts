import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/products.dto';

@Injectable()
export class ProductsService {
  private products: Array<{
    id: number;
    title: string;
    price: number;
    description?: string;
  }> = [];

  createProduct(product: CreateProductDto) {
    const newProduct = { id: Date.now(), ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
