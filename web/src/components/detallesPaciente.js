export default function DetallesPaciente({ birthday, name, gender }) {
  
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
      <section>
        
          <div className=" my-4 flex justify-items-center justify-center gap-40 w-full">
            <h1>Nombre: {name}</h1>
            <h1>Fecha de Nacimiento: {birthday}</h1>
            <h1>Genero: {gender}</h1>
          </div>
      </section>
    </main>
  );
}
