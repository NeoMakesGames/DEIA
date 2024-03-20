"use client";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import Link from "next/link";
import { lista_esp } from "./hooks/server.hooks";
import Modal from "@/components/Modal";
import { inSession } from "../../public/lib/pocketbase";
import { useRouter } from "next/router";


//const respuesta = await lista_esp();

export default function Software() {

  const [user, setUser] = useState("");
  const [pfp, setPfp] = useState("");
  const [search, setSearch] = useState("");
  const [list, setList] = useState(["error", 404]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


useEffect(() => {
  //if(!inSession) { router.push({pathname:"/login"}); }
  setUser(localStorage.getItem("username"));
  setPfp(localStorage.getItem("pfp"));
  listaMedico();
},[])

async function listaMedico() {
  try {
    const respuesta = await lista_esp();

    if (Array.isArray(respuesta)){
      setList(respuesta);
      setLoading(false);
    } 
    else {
      setList(["error", 404]);
      console.error('Err_empty');
    }
  } 
  catch(e) {
    console.error('Err_db:', e);
  } 
};

//funcion de busqueda

const searcher = (e) => {
  setSearch(e.target.value);
};

//metodo de filtrado

const results = !search ? list : list.filter((esp) => {
        const Includeres = esp.nombre_y_apellido.toLowerCase().includes(search.toLocaleLowerCase());
        return Includeres;
      });

//rederizamos la vista

//AGREGAR ´PACIENTES
const [showModal, setShowModal] = useState(false);

const openModal = () => {
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};

return (
  <main>
    <Navbar />
    <div className="bg-[#DBE3FF] h-full overflow-y-auto">
      {/* avatar */}
      {/* PONER ACA EL NOMBRE DEL MEDICO */}
      <div className="avatar flex items-center justify-center flex-col">
        <div className="w-24 rounded-full bg-amber-700 mt-8"></div>
        <h1 className="font-bold text-2xl text-center text-secondary mx-4 my-8"> {user} </h1>
        {/* AGREGAR PACIENTES */}
        <div className="py-1">
          {/* <button className="btn btn-wide ">Agregar Pacientes</button> */}
        </div>
      </div>
      <div className="h-full bg-base-100 flex items-center flex-col">
        {/* search */}
        <input
          type="text"
          placeholder="Paciente"
          className="w-6/12 h-10 py-4 px-4 rounded"
          value={search}
          onChange={searcher}
        ></input>
        {/* lista de pacientes */}
        {loading ? (<h1>Cargando espirometrias...</h1>) : (
        <table className="table table-zebra w-2/3 my-1 mt-3 mx-8 h-[400px] overflow-y-auto ">
          <thead>
            <tr className="bg-curso text-black text-md text-center">
              <th>Nombre</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
              {Array.isArray(results) ? results.map(espirometria => (                      
                <tr key= {espirometria.id}>
                  <Link href={`/espirometrias/${espirometria.id}`}>
                    <td>{espirometria.nombre_y_apellido}</td>
                    <td>{espirometria.updated}</td>
                  </Link>
                </tr>)) : (<h1>No tienes espirometrias? Agrega pacientes con el botón inferior.</h1>)} 
          </tbody>
        </table>)}
      </div>
      {/* agregar paciente boton */}
      <div className="flex justify-center my-8">
        <button onClick={openModal} className="w-2/12 h-10 rounded  bg-amber-300">
          Agregar pacientes
        </button>
        <Modal show={showModal} onClose={closeModal} />
      </div>
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
