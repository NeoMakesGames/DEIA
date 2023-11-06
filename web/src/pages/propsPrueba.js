import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { lookForEsp } from "./hooks/server/server.hooks";

export default function formPacientes() {
  const espirometrias = () => {
    lookForEsp();
  };
  //convertir la lista en un objeto json
  const url = "https://jsonplaceholder.typicode.com/users";
  // const showData = async () => {
  //   const response = await fetch(espirometrias);
  //   const data = await response.json();
  //   // console.log(data);
  //   setUsers(data);
  // };
  console.log(espirometrias);
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const mostrarComponenteClick = () => {
    setMostrarComponente(true);
  };

  const cerrarComponente = () => {
    setMostrarComponente(false);
  };

  return (
    <div className="App">


      <h1>Tu Aplicación</h1>
      <button onClick={mostrarComponenteClick}>Mostrar Componente</button>

      {mostrarComponente && (
        <div className="overlay">
          <div className="modal bg-red-400 w-40">
            <h2>Componente Superpuesto</h2>
            <p>Este es el contenido del componente superpuesto.</p>
            <button onClick={cerrarComponente}>Cerrar</button>
          </div>
        </div>
      )}

     
    </div>
  );
}
