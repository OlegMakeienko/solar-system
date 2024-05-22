import './styles/planetPage.css';
import PlanetType from "../models/planetType.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Planet from "../components/Planet.tsx";
import PlanetDetails from "../components/PlanetDetails.tsx";

type PlanetsProps = {
    planets : PlanetType[]
}

function PlanetPage({ planets } : PlanetsProps) {
    const [planet, setPlanet] = useState<PlanetType>();
    const { id } = useParams();

    useEffect(() => {
        if(typeof id !== "undefined") {
            const activePlanet = planets.find(p => p.id === parseInt(id));
            setPlanet(activePlanet);
        }
    }, [id]);

    useEffect(() => {
        console.log(planet);
    }, [planet]);


    return (
        <section className="planet-page">
            <section className="page-wrapper planer-wrapper">
                {planet && <Planet planet={planet}/> }
                {planet && <PlanetDetails planet={planet}/> }

            </section>
        </section>
    );
}

export default PlanetPage;