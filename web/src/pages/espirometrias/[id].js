import Router, { useRouter } from "next/router";
import DetallesPaciente from "@/components/detallesPaciente";
import Diagnostico from "@/components/diagnosticoIA";
import { lookEsp } from "../hooks/server.hooks";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

const entradaPaciente = () => {
  const router = useRouter();
  const {id} = router.query;

  const [esp, setEsp] = useState({});

  const espirometriaSeteo = async() => {
    try 
    {
      const rec = await lookEsp(id).then(async(record)=>{
        const val = await record
        console.log(val, id)
        return val;
      
      }).catch((e)=>{
        console.log(e);
      })

      setEsp(rec);
      console.log(esp, rec);
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

  function out() {
    Router.push('/espirometrias');
  }

  if(id !== undefined)
  {
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
              Paciente
            </h1>
          </div>

          <DetallesPaciente name={esp?.nombre_y_apellido} birthday={esp?.nacimiento} gender={esp?.sexo}/>
          <div className="w-11/12 bg-slate-800 h-px"></div>
          <Diagnostico diagnostico={esp?.res_IA}/>
          {/* info paciente y diagnositco IA */}
          <div></div>
          {/* imagenes espirometria */}
          <div></div>
        </div>
      </div>
    </main>
  );
  }
  else
  {
    out();
  };
}

export default entradaPaciente;
