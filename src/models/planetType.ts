type Moon = {
    name: string;
    diameter: number;
};

type Temperature = {
    day: number;
    night: number;
};

type PlanetType = {
    id: number;
    name: string;
    latinName: string;
    desc: string;
    distance: number;
    circumference: number;
    moons: Moon[];
    orbitalPeriod: number;
    rotation: number;
    temp: Temperature;
    type: string;
};

export default PlanetType;