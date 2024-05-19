import HomePage from "./pages/HomePage.tsx";
import PlanetPage from "./pages/PlanetPage.tsx";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/planet/:id" element={<PlanetPage/>}/>
      </Routes>
    </div>
  )
}

export default App
