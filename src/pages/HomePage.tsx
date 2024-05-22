import './styles/homePage.css';
import PlanetList from "../components/PlanetList.tsx";
import PlanetType from "../models/planetType.ts";

type HomePageProps = {
    planets: PlanetType[];
};

function HomePage({ planets }: HomePageProps) {
    console.log("Home Page planets:", planets); // Kontrollera datan i consolen

    return (
        <section className="home-page">
            <section className="page-wrapper home-wrapper">
                <h1 className="home-title">Solaris Space Center</h1>
                <div className="planet-list">
                    <PlanetList planets={planets}/>
                </div>
            </section>
        </section>
    );
}

export default HomePage;