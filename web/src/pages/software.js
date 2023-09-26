import Navbar from "@/components/navbar"


 const pacientes = [
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
       },
     },
     {
         datosPaciente: {
           id: 4,
           Nombre: "Janice",
           Apellido: "Jackson",
           Edad: 43,
           Mail: "janice@example.com"
         }
     }
   ];    


 function crearDiv(id) {
     var div = document.createElement('div');
     div.id = "container";
  
     // Use filter to find the patient with the matching id
     const paciente = pacientes[id];
     const datos = paciente.datosPaciente;
     console.log({paciente:paciente, pacientes:pacientes})
  
     // Check if a matching patient was found
     if (paciente) {
       div.textContent = "Nombre: " + datos.Nombre + " Apellido: " + datos.Apellido + " Edad: " + datos.Edad;
     } else {
       div.textContent = "Paciente no encontrado";
     }
  
     div.classList.add('bg-neutral-600','card-xl','p-4', 'm-4', 'w-1/2', 'flex');
     document.body.appendChild(div);
   }

   const showPacientes = () => {
     var i = 0;
   pacientes.forEach(pacienteMostrar => {
       //console.log({pacienteMostrar});
       crearDiv(i);
  
       i += 1;
     });
   }


export default function Software(){
    return(
        <main>
            <Navbar/>
            <div className=" grid grid-rows-2 p-4 gap-4">

            <button className="btn btn-secondary-300  btn-wide " onClick={showPacientes}>
            Mostrar Pacientes
          </button>
          <div id="container" className="bg-red-300"></div>
            </div>
        </main>
        
    )
}