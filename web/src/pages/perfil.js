import Navbar from "@/components/navbar";
import { Alice } from "next/font/google";
import React, { useState } from "react";


 /* console.log("render boton");
   const [Boton, setBoton] = useState('desactivado');
    console.log(Boton);
   const toggleVisibility = () => {
      setBoton('activado');
       console.log('activado');
   };
*/
const pacientes = [
  {
    datosPaciente: {
      Nombre: "John",
      Apellido: "Doe",
      edad: 30,
      Mail: "john@example.com"
    }
  },
  {
    datosPaciente: {
      Nombre: "Jane",
      Apellido: "Smith",
      edad: 25,
      Mail: "jane@example.com"
    }
  },
  {
    datosPaciente: {
      Nombre: "Alice",
      Apellido: "Johnson",
      edad: 40,
      Mail: "alice@example.com"
    }
  }
];
const showPacientes = () => {
pacientes.forEach(datosPaciente => {
    console.log({datosPaciente});
    
  });
}


export default function Perfil() {
  console.log("render app");
  console.log(pacientes);
  return (
    <main>
      <Navbar />
      {/* <h1></h1> */}
      <div className="flex w-full p-4">
        <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center">
          <h1 className="card card-title">Perfil</h1>
          <div>
            <button className="btn btn-secondary-300" >Ver Pacientes</button>
            
          </div>
        </div>

        <div className="divider divider-horizontal"></div>
        <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center">
          <h1 className="card card-title p-4">Historial</h1>
          <button className="btn btn-secondary-300" onClick={showPacientes}>
            Mostrar Pacientes
          </button>

        </div>
      </div>
    </main>
  );
}

// const element = <Perfil persona="Adrian"/>;
