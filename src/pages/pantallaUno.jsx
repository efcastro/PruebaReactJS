import React from 'react';
import { useNavigate } from 'react-router-dom';
import PantallaUnoComponent from './PantallaUnoComponent'

const objetos = [
    {id: 1, nombre: "Manzana"},
    {id: 2, nombre: "Pera"},
    {id: 3, nombre: "Naranja"},
    {id: 4, nombre: "Banano"},
    {id: 5, nombre: "Uva"},
];

const PantallaUno = () => {
    const navigate= useNavigate();

    return( 
        <div>
            <h1>Pantalla Uno</h1>
            <PantallaUnoComponent objetos={objetos}/>
            <button onClick={() => navigate('/pantalla-dos')}>Ir a pantalla dos</button>
        </div>
    );
};

export default PantallaUno;