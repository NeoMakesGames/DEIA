import Router, { useRouter } from "next/router";
import DetallesPaciente from "@/components/detallesPaciente";
import Diagnostico from "@/components/diagnosticoIA";
import { lookEsp } from "../hooks/server.hooks";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

const entradaPaciente = () => {
  const router = useRouter();
  let { id } = router.query;

  const [esp, setEsp] = useState({});

  useEffect(() => {
    if (id === undefined) {
      id = sessionStorage.getItem("lastId");
    }
    espirometriaSeteo();
    // if(id === undefined |id === "err_post" || id === "err_db")
    // {
    //   Router.push("/software")
    // }
    sessionStorage.setItem("lastId", id)
  }, []);

  const espirometriaSeteo = async () => {
    try {
      const rec = await lookEsp(id).then(async (record) => {
        const val = await record
        return val;

      }).catch((e) => {
        console.log(e);
      })

      setEsp(rec);
    }
    catch (error) {
      console.error('Error en espirometriaSeteo:', error);
      return null;
    }
  }

  const [espiro, setEspiro] = useState(0);

  // const cambiarValor = () => {
  //   setEspiro(espiro + 1);
  //   console.log("a");
  // };
  const colorDelDiv = espiro === 0 ? 'red' : 'green';


  return (
    <main>
      <Navbar />
      <div className="bg-[#DBE3FF] h-screen overflow-y-auto">
        <div className="flex justify-center items-center flex-col ">
          {/* titulo y divisor */}
          <h1 className="text-black text-[30px] font-extrabold my-[30px]">
            Institucion
            {/* Espirometría n° {esp?.id} */}
          </h1>

          <div className="w-10/12 bg-slate-800 h-px"></div>
          <div className=" w-full flex justify-center items-center flex-col w-10/12">
            <h1 className="text-black text-[20px] font-bold my-[15px] ">
              Paciente
            </h1>
          </div>

            <DetallesPaciente name={esp?.nombre_y_apellido} birthday={esp?.nacimiento} gender={esp?.sexo} extraData={esp?.datos_personales} />
            <div className="w-10/12 bg-slate-800 h-px flex justify-center items-center"></div>
            <div>

            <h1 className="text-black text-[20px] font-bold my-[15px]  ">
              Diagnostico con IA
            </h1>
            </div>

            <Diagnostico diagnostico={esp?.res_AI} />

          {/*   PRUEBA PONER DIRECT */}



          {esp?.res_AI === 0 && setEspiro(espiro + 1)}

          {/* <p>Valor espirometria: {espiro}</p> */}
          {/* imagenes espirometria */}
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default entradaPaciente;
