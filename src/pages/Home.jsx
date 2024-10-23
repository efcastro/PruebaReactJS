import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>Home</div>
      <Button onClick={() => {navigate("/Pantalla1")}}>Pantalla1</Button>
      <Button onClick={() => {navigate("/Pantalla2")}}>Pantalla2</Button>
    </>
  );
}

export default Home;
