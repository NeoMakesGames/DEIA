import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";

export default function formPacientes() {

    //convertir la lista en un objeto json
    const url = "https://jsonplaceholder.typicode.com/users";

    const showData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setUsers(data);
    };
    const [mostrarComponente, setMostrarComponente] = useState(false);

    const mostrarComponenteClick = () => {
      setMostrarComponente(true);
    };
  
    const cerrarComponente = () => {
      setMostrarComponente(false);
    };
  
  return(

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