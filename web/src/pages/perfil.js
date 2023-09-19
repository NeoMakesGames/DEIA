import Navbar from "@/components/navbar";
import { Alice } from "next/font/google";
import React, { useState, createElement } from "react";


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
/* ESTA PRUEBA SOLO LOGRA MOSTRAR EN CONSOLA LOS ARRAYS
function createDivsFromArray(Pacientes) {
  console.log('esto deberia funcionar');
  // Get a reference to the container where you want to append the divs
  const container = document.getElementById("container"); // Replace "container" with your container's ID or use another method to select the container element.

  // Loop through the array and create a new div for each item
  for (let i = 0; i < Pacientes.length; i++) {
    // Create a new div element
    const newDiv = document.createElement("div");

    // Set the content of the div to the array item
    newDiv.textContent = array[i];

    // Append the div to the container
    container.appendChild(newDiv);
  }
}*/
function crearDiv(){
  var div = document.createElement('div');
  div.id = "container";
  div.textContent = {pacientes};
  div.classList.add('bg-yellow-400', 'card', 'p-4', 'm-4', 'w-1/4');
  //div.innerHTML = document.getElementById('container');
  document.body.appendChild(div);
  

}
/*const listPacientes = pacientes.map((datosPaciente)=>
<li key={datosPaciente.Nombre}>
  {datosPaciente.Nombre}
</li>);
*/
const showPacientes = () => {
pacientes.forEach(datosPaciente => {
    
    console.log({datosPaciente});
    crearDiv();
  });
}

const handleClick = () =>{
  console.log('hola juli'); 
  
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
          <button onClick={crearDiv}>Click me</button>
         <div id="container">container</div>

        </div>
      </div>
    </main>
  );
}

// const element = <Perfil persona="Adrian"/>;
