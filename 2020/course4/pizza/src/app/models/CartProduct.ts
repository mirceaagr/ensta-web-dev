import { Product } from './Product';

export class CartProduct extends Product{
    quantity: number = 1;
    constructor(product: Product) {
        super(
            product.id,
            product.name,
            product.description,
            product.image,
            product.price
        );
    }
}