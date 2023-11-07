import Navbar from "@/components/navbar";
import { Alice } from "next/font/google";
import React, { useState, createElement } from "react";
import { user } from "@/../public/lib/pocketbase";
import { searchFor } from "./hooks/server.hooks";
import Login from "./login";

 /* console.log("render boton");
   const [Boton, setBoton] = useState('desactivado');
    console.log(Boton);
   const toggleVisibility = () => {
      setBoton('activado');
       console.log('activado');
   };
*/
/*const pacientes = [
  {
    datosPaciente: {
      id: 1,
      Nombre: "John",
      Apellido: "Doe",
      Edad: 30,
      Mail: "john@example.com"
    }
  },
  {
    datosPaciente: {
      id: 2,
      Nombre: "Jane",
      Apellido: "Smith",
      Edad: 25,
      Mail: "jane@example.com"
    }
  },
  {
    datosPaciente: {
      id: 3,
      Nombre: "Alice",
      Apellido: "Johnson",
      Edad: 40,
      Mail: "alice@example.com"
    }
  }
];*/



const showPacientes = () => {
  var i = 0;
pacientes.forEach(pacienteMostrar => {
    //console.log({pacienteMostrar});
    crearDiv(i);

    i += 1;
  });
}

const handleClick = () =>{
  console.log('hola juli'); 
  
}


export default function Perfil() {
  console.log(user);
  // console.log(pacientes);
  return (
    <main>
      {/* <h1></h1> */}
      <Navbar />
      <Login/>
    </main>
  );
}
      // <div className="flex w-full p-4">
      //   <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center">
      //     <h1 className="card card-title p-8 h-full">Perfil</h1>
      //     <div className="p-4">
      //       {/* Ju, con user.item (username, mail, etc) agarras lo que necesites. 
      //       El tema de cuando se puede acceder al perfil o no, es un simple if statement */}
      //       <h1>{user.username}</h1>
      //       <button className="btn btn-secondary-300 btn-wide " onClick={() => searchFor("esp", "med2246")} >Ver Pacientes</button>
            
      //     </div>
      //   </div>

      //   <div className="divider divider-horizontal"></div>
      //   <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center">
      //     <h1 className="card card-title p-8 h-full">Historial</h1>
      //     <div className="p-4">
      //     <button className="btn btn-secondary-300  btn-wide " onClick={showPacientes}>
      //       Mostrar Pacientes
      //     </button>
      //    </div>

      //   </div>
      // </div>

// const element = <Perfil persona="Adrian"/>;
