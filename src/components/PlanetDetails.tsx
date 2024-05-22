import "./styles/planetDetails.css"
import PlanetType from "../models/planetType.ts";

type PlanetProps = {
    planet: PlanetType;
};

function PlanetDetails({ planet } : PlanetProps) {
    return (
        <article className="planet-details">
            <div className="planet-details-header">
                <h2>{planet.name} ({planet.latinName})</h2>
            </div>
            <p>{planet.desc}</p>
            <ul>
                <li>Distance: {planet.distance} km</li>
                <li>Circumference: {planet.circumference} km</li>
                <li>Rotation: {planet.rotation} days</li>
                <li>Orbital Period: {planet.orbitalPeriod} days</li>
                <li>Temperature: {planet.temp.day}°C day / {planet.temp.night}°C night</li>
                <li>Type: {planet.type}</li>
                <li>Moons: {planet.moons.length}</li>
            </ul>
        </article>
    );
}

export default PlanetDetails;