import { Product } from './Product';
import { CartProduct } from './CartProduct';

export class Cart{

    private _products: CartProduct[];
    // cart.products
    get products(): CartProduct[] {
        return this._products;
    }

    private _total:number;
    get total():number {
        return this._total;
    }

    get size():number {
        return this._products.length;
    }
    
    constructor(
        products: CartProduct[]
    ) {
        this._products = products;
    }

    public addToCart(product: Product){
        //What do we need to do

        // we check if product exists in cart
        const existingProductIndex = this._products.findIndex((p:CartProduct)=>{ // findIndex returns -1  if item does not exist
            return p.id === product.id
        })
        // if product does not exist -> create new cart product

        // if product exists -> increment quantity
       if(existingProductIndex !== -1) {
           //product in cart
           this._products[existingProductIndex].quantity++;
       } else {
           //product not in cart
            const newProduct:CartProduct = new CartProduct(product);
            // Add new created to the product list
            this._products.push(newProduct);             
        }
        this.calculateCart();
    }

    public deleteFromCart(index:number){
        this._products.splice(index, 1);
        this.calculateCart();
    }
    // empties the cart
    public clearCart() {
        this._products = [];
        this.calculateCart();
    }

    // Increments the quantity of the product with index ..
    public increment(index: number) {
        const prod = this.products[index];
        // @TODO check for null values.. check for quanties.active
        prod.quantity++;
        this._products[index] = {
            // description: prod.description,
            // price : prod.price
            ...prod
        }
        this.calculateCart();
    }

    public decrement(index: number){
        const prod = this.products[index];
        // @TODO check for null values.. check for quanties.active
        prod.quantity--;
        this._products[index] = {...prod}
        this.calculateCart();
    }

    public calculateCart() {
        this._total = 0;
        this.products.forEach((p:CartProduct)=>{
            this._total += p.quantity * p.price;
        })
    }
}