import './styles/homePage.css';
import PlanetList from "../components/PlanetList.tsx";

function HomePage() {
    return (
        <section className="home-page">
            <PlanetList />
        </section>
    );
}

export default HomePage;