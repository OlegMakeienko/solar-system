import {useState, useEffect} from "react";
import HomePage from "./pages/HomePage.tsx";
import PlanetPage from "./pages/PlanetPage.tsx";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import PlanetType from "./models/planetType.ts";

function App() {

    const [planets, setPlanets] = useState<PlanetType[]>([]);
    const [apiKey, setApiKey] = useState<string | null>(null);

    useEffect(() => {
        axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
            .then(response => {

                setApiKey(response.data.key);
            })
            .catch(error => console.log(error));
    }, []);

    console.log(apiKey);

    useEffect(() => {
        {
            if (apiKey)
                axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
                headers : { 'x-zocom' : apiKey }
            })
                .then(response => {
                    console.log('API response:', response.data);
                    if(response.data && Array.isArray(response.data.bodies)) {
                        setPlanets(response.data.bodies);
                    } else {
                        console.error('Invalid API response format');
                    }
                })
                .catch(error => console.log(error));
        }
    }, [apiKey]);

    useEffect(() => {
        console.log(planets)
    }, [planets]);

  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<HomePage planets={planets} /> }/>
          <Route path="/planet/:id" element={<PlanetPage /> }/>
      </Routes>
    </div>
  )
}

export default App

// const planets: PlanetType[] = [
//     {
//         id: 1,
//         name: "Merkurius",
//         latinName: "Mercurialis",
//         desc: "The smallest planet.",
//         distance: 57910000,
//         circumference: 15329,
//         moons: [],
//         orbitalPeriod: 88,
//         rotation: 58,
//         temp: { day: 427, night: -173 },
//         type: "planet"
//     },
//     // Lägg till fler planeter här
// ];
//
// function App() {
//     return <HomePage planets={planets} />;
// }
//
// export default App;