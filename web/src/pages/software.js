  "use client"
  import Navbar from "@/components/navbar";
  import { useState, useEffect } from "react";
  import NavbarSinsesion from "@/components/navbarSinsesion";
  import Historial from "@/components/historialPaciantes";
  import Link from "next/link";
  import { lista_esp } from "./hooks/server.hooks";
  import Modal from "@/components/Modal";

  //const respuesta = await lista_esp();

  export default function Software() {

    const [user, setUser] = useState("");
    const [search, setSearch] = useState("");
    const [list, setList] = useState({});

  async function listaMedico() {
    try {
        const respuesta = await lista_esp();  
        // Verifica si la respuesta es exitosa (código de estado HTTP 200)
        if (respuesta === null || undefined) {
          setList(["error: 404", "Registro No encontrado"])
          console.error('Error al obtener datos. Código de estado:', respuesta.status);
          // Si la respuesta no es exitosa, imprime un mensaje de error en la consola
        }
        console.log(respuesta);
        await setList(respuesta);
        // Actualiza el estado utilizando setEsp      
        return null;
        }
    catch (error) {
      console.error('Error en listaMedico:', error);
      // Si hay un error en la operación asincrónica, imprime un mensaje de error en la consola
    
      return null;
    } 
  };

    useEffect(() => {
      const name = localStorage.getItem("username")
      setUser(name);

      (async() => {
        await listaMedico();
      })();
      console.log(list);
    }, [])

    //funcion de busqueda

    const searcher = (e) => {
      setSearch(e.target.value);
    };
    
    //metodo de filtrado
    const results = 
      !search
      ? list
      : list.filter((dato) => {
          const Includeres = dato.name.toLowerCase().includes(search.toLocaleLowerCase());
          console.log(dato,Includeres);
          return Includeres;
        }
        );


    //rederizamos la vista

    //AGREGAR ´PACIENTES
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };

    const closeModal = () => {
      setShowModal(false);
    };

    // const handleSubmit = (e) => 
    // {
    //   se.preventDefault();
    //   postAI();
    //   closeModal();
    // };

    return (
      <main>
        <Navbar />
        <div className="bg-[#DBE3FF] h-full overflow-y-auto">
          {/* avatar */}
          {/* PONER ACA EL NOMBRE DEL MEDICO */}
          <div className="avatar flex items-center justify-center flex-col">
            <div className="w-24 rounded-full bg-amber-700 mt-8"></div>
            <h1 className="font-bold text-2xl text-center text-secondary mx-4 my-8">
            {user}
            </h1>
            {/* AGREGAR PACIENTES */}
            <div className="py-1">
              {/* <button className="btn btn-wide ">Agregar Pacientes</button> */}
            </div>
          </div>

          <div className="h-full bg-base-100 flex items-center flex-col">
            {/* search */}
            <input
              type="text"
              placeholder="Search"
              className="w-6/12 h-10 py-4 px-4 rounded"
              value={search}
              onChange={searcher}
            ></input>
            {/* lista de pacientes */}
            <table className="table table-zebra w-2/3 my-1 mt-3 mx-8 h-[400px] overflow-y-auto ">
              <thead>
                <tr className="bg-curso text-black text-md text-center">
                  <th>Nombre</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {/* {datosMed.map((medico) => (
                  <tr key={medico.id}>
                    <Link href={`/espirometrias/${espirometria.id}`}>
                    <td>{medico.sexo}</td>
                    </Link>
                    </tr>
                ))

                } */}
                {results ? results.map(espirometria => 
                  (
                    <tr key={espirometria.id}>
                      <Link href={`/espirometrias/${espirometria.id}`}>
                        <td>{espirometria.nombre_y_apellido}</td>
                        <td>{espirometria.created}</td>
                      </Link>
                    </tr>
                  )
                ) : <></>
                }
                  {/* {esp ? esp.map(espirometria => (
                    <tr key={espirometria.id}>
                      <Link href={`/espirometrias/${espirometria.id}`}>
                        <td>{espirometria.nombre_y_apellido}</td>
                        <td>{espirometria.created}</td>
                      </Link>
                    </tr>
                )) : <></>
                } */}
              </tbody>
            </table>
          </div>
          {/* agregar paciente boton */}
          <div className="flex justify-center my-8">
            <button
              onClick={openModal}
              className="w-2/12 h-10 rounded  bg-amber-300"
            >
              Agregar pacientes
            </button>

            <Modal show={showModal} onClose={closeModal} />
          </div>
          {/* <h1>{}</h1> */}
        </div>
      </main>
    );
  }
  {
    /* <div>
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search"
            className="px-10 py-3 mt-4 mx-2 border border-accent rounded-lg"
            ></input>
            <button className="px-10 py-3 rounded-lg mx-2 bg-red-500">Agregar pacientes</button>
            </div>
            {/* lista de pacientes --> luego volver a comentar 
          <table className="table table-zebra w-2/3 my-1 mx-8">
            <thead>
              <tr className="bg-curso text-black text-center">
                <th>Nombre</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {results.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <button className="btn btn-xs mt-2">Ver</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */
  }
