import React, { useEffect, useState } from "react";
import axios from "axios";

import Componente1 from "./componente1";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Pantalla1() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  const frutas = [
    { id: 1, nombre: "Manzana" },
    { id: 2, nombre: "Pera" },
    { id: 3, nombre: "Piña" },
    { id: 4, nombre: "Fresa" },
    { id: 5, nombre: "Sandia" },
  ];
  useEffect(() => {
    axios
      .get(
        "https://5f295253-dbd0-4746-ad69-2224581d2e1e.mock.pstmn.io/obtenerEmpleados"
      )
      .then(function (response) {
        // handle success
        setdata(response.data);
        console.log("data: ", data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  // Make a request for a user with a given ID

  return (
    <div>
      LISTADO FRUTAS FILTRADAS
      <Componente1 frutas={frutas}></Componente1>
      <Button
        onClick={() => {
          navigate("/Pantalla2");
        }}
      >
        Pantalla1
      </Button>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
      data llamada Axios
      {data.length > 1 ? (
        data.map((item) => (
          <>
            <div>Codigo: {item.Codigo} Nombre: {item.Nombre} Apellido: {item.Apellido}</div>
          </>
        ))
      ) : (
        <p>sin datos</p>
      )}
    </div>
  );
}

export default Pantalla1;
