import './styles/homePage.css';
import PlanetList from "../components/PlanetList.tsx";
import PlanetType from "../models/planetType.ts";

type HomePageProps = {
    planets: PlanetType[];
};

function HomePage({ planets }: HomePageProps) {
    console.log("Home Page planets:", planets); //kontrolerar datan i consolen

    return (
        <section className="home-page">
            <section className="page-wrapper home-wrapper">
                <h1 className="home-title">{planets.length} Planets in Solar System</h1>
                <PlanetList planets={planets} />
            </section>
        </section>
    );
}

export default HomePage;