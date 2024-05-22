import './styles/planetList.css';
import Planet from "./Planet.tsx";
import PlanetType from "../models/planetType.ts";

type PlanetsProps = {
    planets : PlanetType[]
}

function PlanetList({ planets }: PlanetsProps) {
    console.log("PlanetList planets:", planets); //kontrolerar datan i consolen

    if (!Array.isArray(planets)) {
        return <div>No planets available</div>;
    }

    return (
        <section className="planet-list">
            {planets.map((planet) => (
                <Planet key={planet.id} planet={planet} />
            ))}
        </section>
    );
}

export default PlanetList;