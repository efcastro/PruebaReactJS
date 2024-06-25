import React,{useEffect, useState} from 'react';
import axios from 'axios';


const PantallaUnoComponent = ({ objetos }) => {
    const[empleados, setEmpleados] = useState([]);

    useEffect(()=>{
        axios.get('https://5f295253-dbd0-4746-ad69-2224581d2e1e.mock.pstmn.io/obtenerEmpleados')
        .then(response => {
            console.log(response.data)
            setEmpleados(response.data);
        })
        .catch(error => {
            console.error('Error en el fetch de empleados:', error)
        });
    }, []);

    return(
        <div>
            {
                objetos.map(objeto => (
                    <p key={objeto.id}>Objeto {objeto.id}: {objeto.nombre}</p>
                ))
            }
            <h2>Empleados</h2>
            {empleados.map (empleado => (
                <div key={empleado.id}>
                    <p> Codigo: {empleado.Codigo}</p>
                    <p> Nombre: {empleado.Nombre}</p>
                    <p> Apellido: {empleado.Apellido}</p>
                </div>
            ))}
        </div>
    );
};

export default PantallaUnoComponent;