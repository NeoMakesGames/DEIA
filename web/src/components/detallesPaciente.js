
export default function DetallesPaciente({id}){

    return(
        <main>

        <section>
            <div className=" my-8 flex items-center justify-center gap-4  flex-col ">
            <h1 className="my-8 font-bold text-[35px]">Paciente</h1>
            <div>
             <h1>Nombre: {id}</h1> 
             <h1>Fecha de Nacimiento: {id}</h1> 
             <h1>Genero: {id}</h1> 
            </div>
            </div>
            
        </section>
        </main>
    )
}