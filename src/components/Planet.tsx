import './styles/planet.css';
import PlanetType from "../models/planetType.ts";

type PlanetProps = {
    planet: PlanetType;
};

function Planet({ planet }: PlanetProps) {
    return (
        <div className="planet">
            <h2>{planet.name} ({planet.latinName})</h2>
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
        </div>
    );
}

export default Planet;