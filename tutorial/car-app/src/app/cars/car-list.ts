import { Car } from '../models/car';
import { Engine } from '../models/engine';

const cars: Car[] = [
    {
        brand: 'Renault',
        model: 'Clio',
        engine: {
            consumption: 4,
            fuel: 'petrol',
            power: 100
        },
        km: 100000,
        price: 7000,
        year: 2010

    },

    {
        brand: 'VW',
        model: 'Passat',
        engine: {
            consumption: 10,
            fuel: 'diesel',
            power: 200
        },
        km: 120000,
        price: 15000,
        year: 2017

    },

    {
        brand: 'BMW',
        model: '320i',
        engine: {
            consumption: 10,
            fuel: 'diesel',
            power: 200
        },
        km: 120000,
        price: 15000,
        year: 2017

    }
];

export default cars;

