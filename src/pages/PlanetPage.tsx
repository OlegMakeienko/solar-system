import './styles/planetPage.css';
import PlanetType from "../models/planetType.ts";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Planet from "../components/Planet.tsx";
import HomeIcon from '../assets/galaxy-svgrepo-com.svg';
import PlanetInfo from "../components/PlanetInfo.tsx";

type PlanetsProps = {
    planets : PlanetType[],
    favoriteList : PlanetType[],
    togglePlanetInFavorite : (id : number) => void
}

function PlanetPage({ planets, favoriteList, togglePlanetInFavorite } : PlanetsProps) {
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


    return (
        <section className="planet-page">
            <section className="planet-wrapper">
                <Link to="/" className="home-link">
                    <img src={HomeIcon} alt="Home" />
                </Link>
                { planet && (
                    <>
                        <section className="planet-image">
                            <Planet planet={planet} size="200px" />
                        </section>
                        <section className="planet-details">
                            <PlanetInfo planet={ planet }
                                        favoriteList={ favoriteList }
                                        togglePlanetInFavoriteList={ togglePlanetInFavorite }
                            />
                        </section>
                    </>
                )}
            </section>
        </section>
    );
}

export default PlanetPage;
