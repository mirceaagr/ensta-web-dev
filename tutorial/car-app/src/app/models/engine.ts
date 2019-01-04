export class Engine {
    fuel: 'petrol' | 'diesel' | 'electric';
    power: number;
    consumption: number;
    Engine() {
        this.fuel = null;
        this.power = null;
        this.consumption = null;
    }
}