const Modal = ({ show, onClose, onSubmit }) => {
    const modalClasses = show
      ? "fixed inset-0 flex items-center justify-center z-50 "
      : "hidden";
  
    return (
      <div className={modalClasses}>
        <div className="absolute bg-white p-8 min-w-[600px] rounded-md shadow-lg ">
          <h2 className="text-3xl font-bold mb-4  ">Agregar Espirometria</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Apellido:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
                placeholder="Apellido"
              />
            </div>
            
                  <h1 className="w-[200px] bg-red-600">iimagen</h1>
              
            {/* Add more form fields as needed */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Submit
              </button>
              
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Modal;