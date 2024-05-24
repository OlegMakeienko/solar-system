import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import PlanetType from "./models/planetType.ts";
import HomePage from "./pages/HomePage.tsx";
import PlanetPage from "./pages/PlanetPage.tsx";
import FavoritePlanets from "./components/FavoritePlanets.tsx";

function App() {
    const [planets, setPlanets] = useState<PlanetType[]>([]);
    const [apiKey, setApiKey] = useState<string | null>(null);
    const [favoriteList, setFavoriteList] = useState<PlanetType[]>([]);

    const togglePlanetInFavoriteList = (id: number) => {
        if (favoriteList.some(planet => planet.id === id)) {
            const filteredFavoriteList = favoriteList.filter(planet => planet.id !== id);
            setFavoriteList(filteredFavoriteList);
        } else {
            setFavoriteList(favoriteList => {
                const addedPlanet = planets.find(planet => planet.id === id);
                return addedPlanet ? [...favoriteList, addedPlanet] : favoriteList;
            });
        }
    }

    useEffect(() => {
        axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
            .then(response => {
                setApiKey(response.data.key);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (apiKey) {
            axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
                headers: { 'x-zocom': apiKey }
            })
                .then(response => {
                    if (response.data && Array.isArray(response.data.bodies)) {
                        setPlanets(response.data.bodies);
                    } else {
                        console.error('Invalid API response format');
                    }
                })
                .catch(error => console.log(error));
        }
    }, [apiKey]);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<HomePage planets={planets} />} />
                <Route
                    path="/planet/:id"
                    element={
                        <PlanetPage
                            planets={planets}
                            favoriteList={favoriteList}
                            togglePlanetInFavorite={togglePlanetInFavoriteList}
                        />
                    }
                />
                <Route
                    path="/favorite"
                    element={
                        <FavoritePlanets
                            favoriteList={favoriteList}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
