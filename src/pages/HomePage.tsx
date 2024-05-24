import './styles/homePage.css';
import PlanetList from "../components/PlanetList.tsx";
import PlanetType from "../models/planetType.ts";
import FavoriteIcon from "../assets/earth-svgrepo-com.svg";
import {Link} from "react-router-dom";

type HomePageProps = {
    planets: PlanetType[];
};

function HomePage({ planets }: HomePageProps) {
    console.log("Home Page planets:", planets); // Kontrollera datan i consolen

    return (
        <section className="home-page">
            <section className="home-wrapper">
                <h1 className="home-title">Solaris Space Center</h1>
                <div className="planet-list">
                    <PlanetList planets={planets}/>
                </div>
                <Link to="/favorite" className="favorite-link">
                    my favorite planets
                    <img src={FavoriteIcon} alt="Favorite"/>
                </Link>
            </section>
        </section>
    );
}

export default HomePage;