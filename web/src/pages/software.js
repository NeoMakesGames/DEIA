import Navbar from "@/components/navbar";
import { useState } from "react";

const pacientes = [
  {
    datosPaciente: {
      id: 1,
      Nombre: "He",
      Apellido: "Man",
      Edad: 20,
      Mail: "Heman@example.com",
    },
  },
  {
    datosPaciente: {
      id: 2,
      Nombre: "Jane",
      Apellido: "Smith",
      Edad: 25,
      Mail: "jane@example.com",
    },
  },
  {
    datosPaciente: {
      id: 3,
      Nombre: "Taylor",
      Apellido: "Swift",
      Edad: 34,
      Mail: "swiftie@example.com",
    },
  },
  {
    datosPaciente: {
      id: 4,
      Nombre: "Janice",
      Apellido: "Jackson",
      Edad: 43,
      Mail: "janice@example.com",
    },
  },
  {
    datosPaciente: {
      id: 5,
      Nombre: "Ron",
      Apellido: "Weasley",
      Edad: 17,
      Mail: "weasley@example.com",
    },
  },
  {
    datosPaciente: {
      id: 6,
      Nombre: "Mary",
      Apellido: "Poppins",
      Edad: 79,
      Mail: "poppins@example.com",
    },
  },
  {
    datosPaciente: {
      id: 7,
      Nombre: "Patrick",
      Apellido: "Jane",
      Edad: 57,
      Mail: "mentalist@example.com",
    },
  },
  {
    datosPaciente: {
      id: 8,
      Nombre: "Alice",
      Apellido: "Johnson",
      Edad: 30,
      Mail: "alice@example.com",
    },
  },
  {
    datosPaciente: {
      id: 9,
      Nombre: "Bob",
      Apellido: "Smithson",
      Edad: 45,
      Mail: "bob@example.com",
    },
  },
  {
    datosPaciente: {
      id: 10,
      Nombre: "Eva",
      Apellido: "Gonzalez",
      Edad: 28,
      Mail: "eva@example.com",
    },
  },
  {
    datosPaciente: {
      id: 11,
      Nombre: "Michael",
      Apellido: "Johnson",
      Edad: 55,
      Mail: "michael@example.com",
    },
  },
  {
    datosPaciente: {
      id: 12,
      Nombre: "Linda",
      Apellido: "Williams",
      Edad: 40,
      Mail: "linda@example.com",
    },
  },
  {
    datosPaciente: {
      id: 13,
      Nombre: "David",
      Apellido: "Anderson",
      Edad: 32,
      Mail: "david@example.com",
    },
  },
  {
    datosPaciente: {
      id: 14,
      Nombre: "Sara",
      Apellido: "Martinez",
      Edad: 22,
      Mail: "sara@example.com",
    },
  },
  {
    datosPaciente: {
      id: 15,
      Nombre: "John",
      Apellido: "Doe",
      Edad: 50,
      Mail: "john@example.com",
    },
  },
  {
    datosPaciente: {
      id: 16,
      Nombre: "Emily",
      Apellido: "Taylor",
      Edad: 29,
      Mail: "emily@example.com",
    },
  },
  {
    datosPaciente: {
      id: 17,
      Nombre: "William",
      Apellido: "Johnson",
      Edad: 65,
      Mail: "william@example.com",
    },
  },
];

// function crearDiv(id) {
//   var div = document.createElement("div");
//   //  div.id = "container";

//   // Use filter to find the patient with the matching id
//   const paciente = pacientes[id];
//   const datos = paciente.datosPaciente;
//   console.log({ paciente: paciente, pacientes: pacientes });

//   // Check if a matching patient was found
//   if (paciente) {
//     div.textContent =
//       "Nombre: " +
//       datos.Nombre +
//       " Apellido: " +
//       datos.Apellido +
//       " Edad: " +
//       datos.Edad;
//   } else {
//     div.textContent = "Paciente no encontrado";
//   }

//   div.classList.add(
//     "bg-blue-600",
//     "card",
//     "p-4",
//     "m-4",
//     "w-11/12",
//     "flex",
//     "card-bordered"
//   );
//   document.body.appendChild(div);
// }

// const showPacientes = () => {
//   var i = 0;
//   pacientes.forEach((pacienteMostrar) => {
//     //console.log({pacienteMostrar});
//     crearDiv(i);

//     i += 1;
//   });
// };

 export default function Software() {
  
   const data = pacientes;

  
    const [message, setmessage] = useState('');

      const handleChange = (event) => {
        console.log(message);
        alert('el nombre es' +{message});
      }

      
   if (handleChange() != null) {
       data.filter((h) => h.include(handleChange()));
      console.log("hiciste una busqueda");
   }
   else {
     console.log("no buscaste nada");
   }
  
  return (
    <main>
      <Navbar />
      <div className="flex">
        {/* Avatar o Perfil*/}
        <div className="h-screen grow bg-base-300  w-3/12">
          <h1 className="text-blue-900 text-2xl font-bold p-4">Pacientes</h1>
          {/* SEARCH */}
          <input type="text" id="message" name="message" onChange={(e) => setmessage(e.target.value)} value={message} placeholder="Nombre del paciente" className="input input-bordered w-full max-w-xs"/>
          <h1>{message}</h1>
        
        </div>

        <div className="overflow-x-auto flex w-screen h-screen bg-neutral-100">
          <div className="p-4">
            <table className="table">
              <thead className="text-xl">
                <th>Nombre</th>
                <th>Mail</th>
              </thead>

              <tbody className=" flex table-auto">
                {data &&
                  data.map((d) => {
                    console.log("la lista se rendriza")
                    return (
                      <div>
                        <tr className="hover w-full table-auto">
                          <td>
                              <span>{d.datosPaciente.Nombre}{d.datosPaciente.Apellido}{d.datosPaciente.Mail}</span>
                              <div className="collapse-content">
                                <button className="btn btn-sm">Editar</button>
                              </div>
                          </td>
                          
                        </tr> 
                        {/* {data.map ((d) => {
                          console.log("lista renderizada");
                          return(
                         <tr className="p-4 table-auto hover w-full flex ">
                           <td>
                      <span> {d.datosPaciente.Nombre}  {d.datosPaciente.Apellido}  {d.datosPaciente.Mail}
                      <div className="collapse-content">
                                <button className="btn btn-sm">Editar</button>
                              </div>
                      </span>
                      </td>
                      </tr> 

                          )
                        })} */}
                        </div>
                        )})}
                  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
