import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import NavbarSinsesion from "@/components/navbarSinsesion";

export default function Software() {
  //setear hooks

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // funcion para traer los datos de la api

  //convertir la lista en un objeto json
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

  const [isShowingComponents, setisShowingComponents] = useState(false);

  const toggleElements = () => {
    setisShowingComponents(!isShowingComponents);
  }

  return (
    <main>

      <div>
        {/* avatar */}
        <div className="avatar flex items-center justify-center flex-col">
          <div className="w-24 rounded-full bg-amber-700 mt-8"></div>
          <h1 className="font-bold text-2xl text-center text-secondary mx-4 my-8">Perro Salchicha</h1>
          {/* AGREGAR PACIENTES */}
          <div className="py-1">
            {/* <button className="btn btn-wide ">Agregar Pacientes</button> */}
            </div>
        </div>

      <div className="min-h-screen bg-base-100 flex items-center justify-center  flex-col">
        {/* search */}
        <div>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Search"
          className="px-10 py-3 mt-4 mx-2 border border-accent rounded-lg"
          ></input>
          <button className="px-10 py-3 rounded-lg mx-2 bg-accent">Agregar pacientes</button>
          </div>
          {/* lista de pacientes */}
        <table className="table table-zebra w-2/3 my-1 mx-8">
          <thead>
            <tr className="bg-curso text-white text-center">
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
      </div>
      </div>
    </main>
  );
}
