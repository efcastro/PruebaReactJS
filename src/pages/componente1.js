import React from "react";

function Componente1({frutas}) {

  const frutasFIltradas = frutas.filter((item) => {
     if (item.id !== 3) {
         return item
     }
   })   
console.log(frutasFIltradas);

  return <div>
    {frutasFIltradas.map((item,key) => (
      <div id={key}>{item.nombre}</div>
    ))}
  </div>;
}

export default Componente1;
