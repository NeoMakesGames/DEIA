export default function DetallesPaciente({ birthday, name, gender, extraData }) {
  
  //transforma las variables a algo que se pueda entender
  
  switch(gender){
    case "M":
      gender = "Hombre";
      break;

    case "F":
      gender = "Mujer";
      break;

    case "O":
      gender = "Otro";
      break;
  }

  //birthday = birthday.slice(0,10);

  return (
    <main>
      <section className="w-full px-10">
        
          <div className="  my-4 mx-8 items-start justify-start grid-rows-2 grid-flow-col grid w-full gap-x-40 gap-y-10 ">
            <h1>Nombre: {name}</h1>
            <h1>Fecha de Nacimiento: {birthday}</h1>
            <h1>Genero: {gender}</h1>
            <p>Datos Extra:{extraData}</p>
          </div>
      </section>
    </main>
  );
}
