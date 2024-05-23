import './styles/planetPage.css';
import PlanetType from "../models/planetType.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Planet from "../components/Planet.tsx";

type PlanetsProps = {
    planets : PlanetType[]
}

function PlanetPage({ planets } : PlanetsProps) {
    const [planet, setPlanet] = useState<PlanetType>();
    const { id } = useParams();

    useEffect(() => {
        if (typeof id !== "undefined") {
            const activePlanet = planets.find(p => p.id === parseInt(id));
            setPlanet(activePlanet);
        }
    }, [id]);

    useEffect(() => {
        console.log(planet);
    }, [planet]);

    const addToFavorites = () => {
        // Lägg till kod för att lägga till planeten som favorit
    }

    return (
        <section className="planet-page">

            <section className="page-wrapper planet-wrapper">
                { planet && (
                    <>
                        <section className="planet-image">
                            <Planet planet={planet} size="200px" />
                        </section>
                        <div className="planet-info">
                            <h1 className="planet-title">{planet.name}</h1>
                            <div className="planet-info-item spaced-text-1">{planet.latinName}</div>
                            <div className="planet-info-item">{planet.desc}</div>
                            <hr/>
                            <section className="planet-info-section">
                                <div className="planet-info-item spaced-text-2">
                                    Omkrets <p className="spaced-text-3">{planet.circumference} km</p>
                                </div>
                                <div className="planet-info-item spaced-text-2">
                                    Distans från solen <p className="spaced-text-3">{planet.distance} km</p>
                                </div>
                                <div className="planet-info-item spaced-text-2">
                                    Max temp <p className="spaced-text-3">{planet.temp.day} °C</p>
                                </div>
                                <div className="planet-info-item spaced-text-2">
                                    Min temp <p className="spaced-text-3">{planet.temp.night} °C</p>
                                </div>
                            </section>
                            <hr/>
                            <div className="planet-info-item">Månar: {planet.moons.join(", ")}</div>
                            <button className="favorite-button" onClick={addToFavorites}>Lägg planeten som favorit</button>
                        </div>
                    </>
                )}
            </section>
        </section>
    );
}

export default PlanetPage;
