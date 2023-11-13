const Modal = ({ show, onClose, onSubmit }) => {
  const modalClasses = show
    ? "fixed inset-0 flex items-start justify-center z-50 overflow-y-auto max-h-[400px] mt-[150px]  "
    : "hidden";

  return (
    <div className={modalClasses}>
      <div className="absolute bg-white p-8 min-w-[700px] rounded-md shadow-lg  ">
        <h2 className="text-black text-[30px] font-bold my-2">Agregar Paciente</h2>
        <span className="text-black text-[20px] font-thin my-1">Completa el siguiente formulario</span>
        <form onSubmit={onSubmit}>
          {/* <div className="flex items-start justify-center flex-col mt-8"> */}
            {/*nombre y apellido - text  */}
            <div className="py-4 form-control">
              <label className=" label">
                <span className="label-text">Nombre y Apellido</span>
              </label>
              <input
                type="text"
                placeholder="nombre y apellido"
                className=" input w-full p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              ></input>
            </div>
            {/* fecha nac - num */}
            <div className="form-control">
              <label className="my-2 label">
                <span className="label-text">Fecha de Nacimiento</span>
              </label>
              <input
                type="date"
                className="input w-full p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              ></input>
            </div>
            {/* genero - select */}
            <div className="form-control">
            <label className="my-2 text-md label">
              <span className="">Seleccione genero</span>
            </label>
              <select className="input w-full p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit">
                <option value="F">Femenino</option>
                <option value="M">Masculino</option>
                <option value="O">Otro</option>
              </select>
            </div>
            {/* numeros de la espirometria  - num */}

              <label className="my-2 text-md form-control">Ingrese datos de la espirometria</label>
            <div className="mt-2 mb-4  items-start justify-start grid-rows-2 grid-flow-col grid">
              <div className="label">
                <span className="label-text">FEV1</span>
                <input
                  type="number"
                  className="input w-1/2 p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                ></input>
              </div>
              <div className="label">
                <span className="label-text">FEV1 Pred</span>
                <input
                  type="number"
                  className="input w-1/2 p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                ></input>
              </div>
              <div className="label">
                <span className="label-text">FVC</span>
                <input
                  type="number"
                  className="input w-1/2 p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                ></input>
              </div>
              <div className="label">
                <span className="label-text">FVC Pred</span>
                <input
                  type="number"
                  className="input w-1/2 p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                ></input>
              </div>
              </div>
            {/*   diagnostico  -text field */}
            <label className="my-2">
             <span className="label-text"> Datos del paciente</span>
              <textarea
                type="text"
                className="w-full textarea p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              ></textarea>
            </label>
            {/*submit */}
            <div className="flex items-center justify-center">
            <label className="my-2">
              <button type="submit" onClick={onClose} className="btn ">
                Agregar
              </button>
            </label>
            </div>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Modal;
