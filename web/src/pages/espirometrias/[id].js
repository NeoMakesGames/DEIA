import { useRouter } from "next/router";
import DetallesPaciente from "@/components/detallesPaciente";
import Diagnostico from "@/components/diagnosticoIA";
import { lookEsp } from "../hooks/server.hooks";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Routes, useSearchParams, useParams } from 'react-router-dom';
import { user } from "../../../public/lib/pocketbase";

const entradaPaciente = () => {
  const router = useRouter();
  const {id} = router.query;

  console.log(id)

  const [esp, setEsp] = useState();

  const espirometriaSeteo = async () => {
    try 
    {
      console.log(id)
      const record = await lookEsp(id)
      
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

          {/* <DetallesPaciente infoPaciente={[id, name, username]} /> */}
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
