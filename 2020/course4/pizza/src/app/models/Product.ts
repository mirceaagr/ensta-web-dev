export class Product{
    name:string;
    image:string;
    id:number;
    description:string;
    price:number;
    sale:boolean;

    constructor(id = 0, name = "", description = "", image = "", price = 0, sale=false) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price; 
        this.sale = sale;
    }
}