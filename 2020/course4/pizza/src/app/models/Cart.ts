import { Product } from './Product';

export class Cart{

    public products: Product[];
    private _total:number;
    private _discount:number;
    private _size: number;
    
    constructor(
        products: Product[]
    ) {
        this.products = products;
    }

    public addToCart(product: Product){

    }

    public deleteFromCart(index:number){

    }
}