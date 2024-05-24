import "./styles/planetDetails.css"
import PlanetType from "../models/planetType.ts";

type PlanetProps = {
    planet: PlanetType,
    favoriteList : PlanetType[],
    togglePlanetInFavoriteList : (id : number) => void
};

function PlanetInfo({ planet, favoriteList, togglePlanetInFavoriteList } : PlanetProps) {

    const isInFavoriteList = (id : number) => {
        return favoriteList.some(planet => planet.id === id)
    }

    return (
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
            <button onClick={ () => togglePlanetInFavoriteList(planet.id) } className="favorite-button">
                { isInFavoriteList(planet.id) ? "Det är en av dina favorite planeter!" : "Lägg planeten som favorit" }
            </button>
        </div>
    );
}

export default PlanetInfo;