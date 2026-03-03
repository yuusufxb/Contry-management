import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar } from "./pages/navbar";
import { Detail } from "./pages/details";
import { Region } from "./pages/Region";
import { Population } from "./pages/Population";
import { Currency } from "./pages/Currency";
import { TotalPopulation } from "./pages/total_population";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/countries/:id" element={<Detail/>}/>
      <Route path="countries/region" element={<Region/>}/>
      <Route path="countries/population" element={<Population/>}/>
      <Route path="countries/Currency" element={<Currency/>}/>
      <Route path="totalpopulation" element={<TotalPopulation/>}/>
    </Routes>
    </>
  );
}

export default App;
