import Navbar from "@/components/navbar";

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
      Edad:34,
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

const showPacientes = () => {
  var i = 0;
  pacientes.forEach((pacienteMostrar) => {
    //console.log({pacienteMostrar});
    crearDiv(i);

    i += 1;
  });
};

export default function Software() {
  return (
    <main>
      <Navbar />
      <div className="flex">

        {/* Avatar o Perfil*/}
      <div className="h-sreen grow bg-pink-400  w-3/12">
       <h1 className="text-blue-900 text-2xl font-extrabold p-4">Pacientes</h1>
       <select className="select w-full max-w-xs">
        <option>A-Z</option>
        <option>ID</option>
        <option>A-Z</option>
       </select>
        </div>

        <div className="overflow-x-auto flex w-full">
          <div className="table p-4  w-full  ">
          <thread className="text-xl"> {/*TABLA*/}
                <th>Nombre</th>
                <th>Mail</th>
                </thread> 

            {pacientes.map((p) => {
              return (
                <div>              
                <tbody className=" flex ">   
                <tr className="hover w-full">
                  <td>
                    <div tabIndex="0" className="collapse bg-primary-200">
                    <span className="collapse-title text-md font-medium">{p.datosPaciente.id} {p.datosPaciente.Nombre}  {p.datosPaciente.Apellido}  {p.datosPaciente.Mail}</span>
                    <div className="collapse-content">
                      <button className="btn btn-sm">Editar</button>
                    </div>
                    </div>
                  </td>
                </tr>
              {/* <div className="bg-blue-600 table-auto w-full flex ">
              <span> {p.datosPaciente.Nombre}  {p.datosPaciente.Apellido}  {p.datosPaciente.Mail}</span>
              </div> */}
              </tbody>
              </div>);
            })}
          </div>
          </div>
      </div>
    </main>
  );
}
