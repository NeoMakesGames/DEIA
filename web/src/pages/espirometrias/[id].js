import { useRouter } from "next/router";
import DetallesPaciente from "@/components/detallesPaciente";
import Diagnostico from "@/components/diagnosticoIA";
import { lookEsp } from "../hooks/server.hooks";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const entradaPaciente = () => {
  const router = useRouter();
  const { id, name, username } = router.query;
  
  const [esp, setEsp] = useState();
  const location = useLocation(); 
  const idsss = new URLSearchParams(location.search).get("my")

  const espirometriaSeteo = async () => {
    try 
    {
      console.log(id)
      const record = await lookEsp("wy7zd6uxownh9y0")
      
      if (record === null || record === undefined)
      {
        setEsp(["error: 404", "Registro No encontrado"])
      }
      console.log(record);

      return await setEsp(record);
      
    }
    catch (error)
    {
      console.error('Error en espirometriaSeteo:', error);
      return null;
    }
  } 


  useEffect(() =>{
    espirometriaSeteo();

  }, []);

  return (
    <main>
      <Navbar />
      <div className="bg-[#DBE3FF] h-screen overflow-y-auto">
        <div className="flex justify-center items-center flex-col">
          {/* titulo y divisor */}
          <h1 className="text-black text-[30px] font-extrabold my-[30px]">
            Espirometría n° {esp?.id}
          </h1>

          <div className="w-11/12 bg-slate-800 h-px"></div>
          <div className=" w-full flex justify-start items-start flex-col">
            <h1 className="text-black text-[20px] font-bold my-[15px] px-8">
              Paciente {esp?.nombre_y_apellido}
            </h1>
          </div>

          <DetallesPaciente infoPaciente={[id, name, username]} />
          <div className="w-11/12 bg-slate-800 h-px"></div>
          <Diagnostico/>
          {/* info paciente y diagnositco IA */}
          <div></div>
          {/* imagenes espirometria */}
          <div></div>
        </div>
      </div>
    </main>
  );
};
export default entradaPaciente;
