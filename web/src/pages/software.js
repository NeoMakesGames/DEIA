import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import NavbarSinsesion from "@/components/navbarSinsesion";
import Historial from "@/components/historialPaciantes";
import { Router } from "next/router";
import Link from "next/link";
import { searchFor } from "./hooks/server/server.hooks";

export default function Software() {

  // const espirometrias = ()  => {searchFor();}
  // console.log(espirometrias);

  //setear hooks

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // funcion para traer los datos de la api

  //convertir la lista en un objeto json
  //  PONER ACA EL JSON DE LOS PACIENTES
  const url = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  };
  // showData();

  //funcion de busqueda

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  //metodo de filtrado

  const results = !search
    ? users
    : users.filter((dato) =>
        dato.name
          .toLowerCase()
          .includes(search.toLocaleLowerCase(), console.log(dato, search))
      );

  useEffect(() => {
    showData();
  }, []);
  //rederizamos la vista

  return (
    <main>
      <Navbar />
      <div className="bg-[#DBE3FF] h-full overflow-y-auto">
        {/* avatar */}
        {/* PONER ACA EL NOMBRE DEL MEDICO */}
        <div className="avatar flex items-center justify-center flex-col">
          <div className="w-24 rounded-full bg-amber-700 mt-8"></div>
          <h1 className="font-bold text-2xl text-center text-secondary mx-4 my-8">
            Perro Salchicha
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
              <tr className="bg-curso text-black text-center">
                <th>Nombre</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {results.map((user) => (
                <tr key={user.id}>
                  <Link href={`/espirometrias/${user.id}`}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                    </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* agregar paciente boton */}
        <div className="flex justify-center my-8">
          <button className="w-2/12 h-10 rounded  bg-amber-300">
            Agregar pacientes
          </button>
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
