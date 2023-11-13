import { useRouter } from "next/router";
import DetallesPaciente from "@/components/detallesPaciente";
import Diagnostico from "@/components/diagnosticoIA";
import { lookForEsp } from "../hooks/server.hooks";
//import { id, name, username } from DetallesPaciente;
import Navbar from "@/components/navbar";
import { useEffect } from "react";

const entradaPaciente = () => {
  const router = useRouter();
  const { id, name, username } = router.query;

  useEffect(async() =>{
    //lookForEsp(id) --> data completa de 1 espirometria {id}
    
  });

  return (
    <main>
      <Navbar />
      <div className="bg-[#DBE3FF] h-screen overflow-y-auto">
        <div className="flex justify-center items-center flex-col">
          {/* titulo y divisor */}
          <h1 className="text-black text-[30px] font-extrabold my-[30px]">
            Espirometría n° {id}
          </h1>

          <div className="w-11/12 bg-slate-800 h-px"></div>
          <div className=" w-full flex justify-start items-start flex-col">
            <h1 className="text-black text-[20px] font-bold my-[15px] px-8">
              Paciente {name} {username}
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
