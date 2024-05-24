import "./styles/favoritePlanets.css"
import PlanetType from "../models/planetType.ts";
import Planet from "./Planet.tsx";
import {Link} from "react-router-dom";
import HomeIcon from '../assets/galaxy-svgrepo-com.svg';


interface FavoritePlanetsProps {
    favoriteList: PlanetType[]
}

function FavoritePlanets({ favoriteList }: FavoritePlanetsProps) {
    return (
        <section className="favorite-page">
            <Link to="/" className="home-link">
                <img src={HomeIcon} alt="Home" />
            </Link>
            <section className="favorite-wrapper">
                {
                    favoriteList.length > 0 ? (
                        favoriteList.map(planet => (
                            <div key={planet.id} className="favorite-planet-item">
                                <Planet planet={planet} size="100px" />
                                <div className="planet-name">{planet.name}</div>
                            </div>
                        ))
                    ) : (
                        <p>Inga favoriter tillagda ännu.</p>
                    )
                }
            </section>
        </section>
    );
}

export default FavoritePlanets;