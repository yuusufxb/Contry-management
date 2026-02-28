import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar } from "./pages/navbar";
import { Detail } from "./pages/details";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/countries/:id" element={<Detail/>}/>
    </Routes>
    </>
  );
}

export default App;
