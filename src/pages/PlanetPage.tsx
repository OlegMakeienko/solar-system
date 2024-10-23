import './styles/planetPage.css';
import PlanetType from "../models/planetType.ts";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Planet from "../components/Planet.tsx";
import HomeIcon from '../assets/galaxy-svgrepo-com.svg';
import PlanetInfo from "../components/PlanetInfo.tsx";

type PlanetsProps = {
    planets: PlanetType[],
    favoriteList: PlanetType[],
    togglePlanetInFavorite: (id: number) => void
}

function PlanetPage({ planets, favoriteList, togglePlanetInFavorite }: PlanetsProps) {
    const [planet, setPlanet] = useState<PlanetType | undefined>(undefined);  // Typ: PlanetType eller undefined
    const { id } = useParams();

    useEffect(() => {
        if (id && planets.length > 0) {  // Lägg till planets.length för att undvika att söka innan planets är laddade
            const activePlanet = planets.find(p => p.id === parseInt(id));
            setPlanet(activePlanet);
        }
    }, [id, planets]);  // Lägg planets i beroendelistan för att uppdatera när planets ändras

    if (!planet) {  // Lägg till fallback om planet inte hittas
        return (
            <section className="planet-page">
                <section className="planet-wrapper">
                    <Link to="/" className="home-link">
                        <img src={HomeIcon} alt="Home" />
                    </Link>
                    <p>Planet not found</p>
                </section>
            </section>
        );
    }

    return (
        <section className="planet-page">
            <section className="planet-wrapper">
                <Link to="/" className="home-link">
                    <img src={HomeIcon} alt="Home" />
                </Link>
                <section className="planet-image">
                    <Planet planet={planet} size="200px" />
                </section>
                <section className="planet-details">
                    <PlanetInfo
                        planet={planet}
                        favoriteList={favoriteList}
                        togglePlanetInFavoriteList={togglePlanetInFavorite}  // Rätt prop-namn
                    />
                </section>
            </section>
        </section>
    );
}

export default PlanetPage;
