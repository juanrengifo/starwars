export class Starship {

    // Modelo para las naves
    constructor(
        public name: string,
        public model: string,
        public manufacturer: string,
        public cost_in_credits: string,
        public length: string,
        public lengmax_atmosphering_speedth: string,
        public crew: string,
        public passengers: string,
        public cargo_capacity: string,
        public consumables: string,
        public hyperdrive_rating: string,
        public MGLT: string,
        public starship_class: string
    ) {}
}
