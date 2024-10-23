import React from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Pantalla2() {
  const navigate = useNavigate();

    const numeroInputs = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      LISTADO INPUTS
      <div>
        {numeroInputs.map((item) => (
        <TextField>{item}</TextField>
            
        ))}
         <Button onClick={() => {navigate("/")}}>Home</Button>
      </div>
    </div>
  );
}

export default Pantalla2;
