import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//PANTALLAS
import Pantalla1 from "./pages/Pantalla1";
import Pantalla2 from "./pages/Pantalla2";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pantalla1" element={<Pantalla1 />} />
          <Route path="/Pantalla2" element={<Pantalla2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
