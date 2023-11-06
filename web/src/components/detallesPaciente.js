export default function DetallesPaciente({ id }) {
  return (
    <main>
      <section>
        
          <div className=" my-4 flex justify-items-center justify-center gap-40 w-full">
            <h1>Nombre: {id}</h1>
            <h1>Fecha de Nacimiento: {id}</h1>
            <h1>Genero: {id}</h1>
          </div>
      </section>
    </main>
  );
}
