import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";

export default function formPacientes() {
  /* DICCIONARIO
    pacientes = {
        datosPaciente: {
            Nombre: nombre
            Apellido: apellido
            edad: edad
            Mail: mail
            Historial: historial
            espirometriaDatos: espDatos
        }
    }
*/

 /* const [nombre, setNombre] = useState('Ingrese nombre');
  const [apellido, setApellido] = useState('Ingrese apellido');
  const [edad, setEdad] = useState('Ingrese edad');

  function historial(event) {
    event.preventDefault();
    const form = event.target;

    const Nombre = form.nombre.value;
    const Apellido = form.apellido.value;
    const Edad = parseInt(form.edad.value);
*/
const [formData, setFormData] = useState({
  nombre: '',
  apellido: '',
  edad: '',
});
const [dataArray, setDataArray] = useState([]);
const handleChange = (e) => {
  const {name,value} = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
  setFormData({
    nombre: '',
    apellido: '',
    edad: '',
  });
};
const handleSubmit = (e) => {
  e.preventDefault(); //crea una copia del dataArray
  setDataArray ([...dataArray, formData]);
}
const [divCount, setDivCount] = useState(0); // State to keep track of the number of divs
const [divList, setDivList] = useState([]);   // State to store the div elements

// Function to add a new div to the list
const addDiv = () => { // una key es una variable que almacena un array index
  const newDiv = <div key={divCount}>New Div {divCount + 1}</div>; // You can customize the content of the div as needed
  setDivList([...divList, newDiv]);
  setDivCount(divCount + 1);}
    // pacientes.push = { Nombre: nombre, Apellido: apellido, Edad: edad };
    // console.log(Nombre);
    // pacientes.push(paciente);
    // let array = [];
    // Object.keys(pacientes).forEach((key) => {
    //   // por cada paciente, createState() para 
    //   let ver = `${key}` + ": " + "Nombres:" + `${pacientes[key].Nombre}` + "Apellido: "+ `${pacientes[key].Apellido}` + "Edad: "+ `${pacientes[key].Edad}`;
    // });
    // array.push(ver);
    // console.log(array);
  

  return (
    <main>
      <Navbar />
      <form className="p-4" name="formulario" >
        <div className="p-4 m-4">
          <input
            type="text"
            name="nombre"
            placeholder="nombre"
            className="input bg-primary  datoInput"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="p-4 m-4">
          <input
            type="text"
            name="apellido"
            placeholder="apellido"
            className="input bg-primary datoInput"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="p-4 m-4">
          <input
            type="text"
            name="edad"
            placeholder="edad"
            className="input bg-primary  datoInput"
            value={formData.edad}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div className="card bg-neutral-500 ">
        <div className="card-body">
          <h2>Lista de elementos</h2>
          <button onClick={addDiv}>click</button> 
          <ul>
          {dataArray.map((data, index) => (
            <li key={index}>
              Nombre: {data.nombre}, Apellido: {data.apellido}, Edad: {data.edad}
            </li>
              ))}

            </ul>
          {/* /* {divList.map((div, index) => (
          <li key={index}>{div}</li>
        ))} */}

        
        </div>
      </div>
    </main>
  );
}
