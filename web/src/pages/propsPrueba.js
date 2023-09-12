
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function formPacientes(){
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
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        edad: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('datos del formulario' , formData);
    }  ;
    
    //  let pacientes = [];
    //  function historial(event){


    //     event.preventDefault();
    //      const form = event.target;

    //  const Nombre = (form.nombre.value);
    //  const Apellido = (form.apellido.value);
    //  const Edad = parseInt(form.edad.value);
        
    //  // pacientes.push={Nombre: nombre, Apellido: apellido, Edad: edad};
    //   console.log(Nombre);
    //     pacientes.push(paciente);
    //  let array = [];
    //  Object.keys(pacientes).forEach(key => {
    //     let ver =  `${key}` + ": " + "Nombres:" + `${pacientes[key].Nombre}`;
    //  });
    //  array.push(ver);
    //  console.log(array);
    
// export default function Prueba() {
//   let [formData, setFormData] = useState({
//     nombre: "",
//     apodo: "",
//     edad: "",
//   });

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       [name]: value,
     }));
     
   };

//     // Convert the formData object to an array
//     let formDataArray = Object.values(formData);
//     console.log(formDataArray); // This will show the array in the console

//     let dataItems = formDataArray.map((entrada) => <li>
//         {entrada}
//     </li>
//     );

//   };

  return (
    <main>
        <Navbar/>
      <form className="p-4" name="formulario" onSubmit={handleChange} >
        <div className="p-4 m-4">
          <input type="text" name="nombre" placeholder="nombre" className="input bg-primary  datoInput"
          value={formData.nombre}
          onChange={handleChange}
          />
        </div>
        <div className="p-4 m-4">
          <input type="text" name="apellido" placeholder="apellido" className="input bg-primary datoInput"
          value={formData.apellido}
          onChange={handleChange}
          />
        </div>
        <div className="p-4 m-4">
          <input type="text" name="edad" placeholder="edad" className="input bg-primary  datoInput"
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
                <ul>
                  
                </ul>
            </div>
            

        </div>


    </main>
  )
};
