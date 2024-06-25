import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PantallaUno from './pages/pantallaUno';
import PantallaDos from './pages/pantallaDos';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/pantalla-uno" element={<PantallaUno/>}></Route>
        <Route path="/pantalla-dos" element={<PantallaDos/>}></Route>
      </Routes> 
    </Router>
  )
}

export default App;
