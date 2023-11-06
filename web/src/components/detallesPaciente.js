export default function DetallesPaciente({ id, name, username }) {
  return (
    <main>
      <section>
        
          <div className=" my-4 flex justify-items-center justify-center gap-40 w-full">
            <h1>Nombre: {name}</h1>
            <h1>Fecha de Nacimiento: {id}</h1>
            <h1>Genero: {username}</h1>
          </div>
      </section>
    </main>
  );
}
