import './styles/planet.css';
import PlanetType from "../models/planetType.ts";
import {Link} from "react-router-dom";

type PlanetProps = {
    planet: PlanetType;
};

const planetColors: { [key: string]: string } = {
    "Merkurius": "#a9a9a9",
    "Venus": "#e8c90d",
    "Jorden": "#1f77b4",
    "Mars": "#d9534f",
    "Jupiter": "#f87e03",
    "Saturnus": "#e3d9a8",
    "Uranus": "#4aa3df",
    "Neptunus": "#3746ff",
    "Solen" : "#F87E03FF"
};


function Planet({ planet }: PlanetProps) {
    const planetColor = planetColors[planet.name] || "#ffffff";

    return (
        <Link to={"/planet/" + planet.id} className="planet-link">
        <article style={{ backgroundColor: planetColor }} className="planet">
            <div className="planet-header">
                <h2>{planet.name}</h2>
            </div>
            <div className="planet-cover">
                <h4>{planet.latinName}</h4>
            </div>
        </article>
        </Link>
    );
}

export default Planet;