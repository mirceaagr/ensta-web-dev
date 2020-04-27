export const SERVER_URL = `http://localhost:3000/`;

export interface IMenuLangSet{
    home:string,
    about:string,
    pizzas:string,
    cart:string,
    contact:string
}

export interface ILangSet{
    "menu":IMenuLangSet
}

export interface ILang{
    "en":ILangSet,
    "fr":ILangSet
}

export type AllowedLangs = "en" | "fr"

export const LANGS:ILang = {
    "en":{
        "menu":{
            home:"Home",
            about:"About Us",
            pizzas:"Our Pizzas",
            cart:"Shopping Cart",
            contact:"Contact Us"
        }
    },
    "fr":{
        "menu":{
            home: "Accueil",
            about:"A propos de nous",
            pizzas:"Nos pizzas",
            cart:"Panier",
            contact:"Contactez"
        }
    }
}
