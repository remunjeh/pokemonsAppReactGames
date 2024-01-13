import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";

import Home from "../views/Home";
import About from "../views/About"
import Pokemon from "../views/Pokemon";
import NotFound from "../views/NotFound";
import PokemonInfo from "../views/PokemonInfo";
import Decide from "../views/Decide";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokinfo/:id" element={<PokemonInfo />} />
          <Route path="/decide" element={<Decide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
