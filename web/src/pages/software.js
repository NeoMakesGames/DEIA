import Navbar from "@/components/navbar";

const pacientes = [
  {
    datosPaciente: {
      id: 1,
      Nombre: "John",
      Apellido: "Doe",
      Edad: 30,
      Mail: "john@example.com",
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
      Nombre: "Alice",
      Apellido: "Johnson",
      Edad: 40,
      Mail: "alice@example.com",
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
      <div className="w-full grid grid-flow-row auto-rows-max">
        <div id="container" className="bg-red-300 h-fit flex">
          {/* <button
            className="btn btn-secondary-300 btn-md self-center"
            onClick={showPacientes}
          >
            Mostrar Pacientes
          </button> */}

          <div class="dropdown dropdown-hover dropdown-left dropdown-bottom">
            <button tabindex="0" className="btn">
              Hover
            </button>
            <ul
              tabindex="0"
              class="dropdown-content  z-[1] menu p-2  bg-red-500 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
          <div className="bg-red">
            {pacientes.map((p) => {
              return (
                <div>
              <thread> {/*TABLA*/}
                <th>Nombre</th><br/>
                <th>Mail</th>
                </thread> 

                <tbody>   

              {/* <div className="bg-blue-600 table-auto w-full flex ">
              <span> {p.datosPaciente.Nombre}  {p.datosPaciente.Apellido}  {p.datosPaciente.Mail}</span>
              </div> */}
              </tbody>
              </div>);
            })}
          </div>
      </div>
    </main>
  );
}
