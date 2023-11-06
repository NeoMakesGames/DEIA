import { useRouter } from "next/router";
import DetallesPaciente from "@/components/detallesPaciente";
import Navbar from "@/components/navbar";

const entradaPaciente = () => {
  const router = useRouter();
  const { id, name, username } = router.query;

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
              Paciente
            </h1>
          </div>

          <DetallesPaciente infoPaciente={id, name, username} />
          <div className="w-11/12 bg-slate-800 h-px"></div>
          <div className=" w-full flex justify-start items-start flex-col">
            <h1 className="text-black text-[20px] font-bold my-[15px]  px-8">
              Diagnostico con IA
            </h1>
            <div className="flex justify-center items-center ">
              <h1 className="text-black text-[16px]  my-[15px]  px-8">
                Estamos procesando tu diagnóstico
              </h1>
              {/*  AÑADIR ANIMACION DE CARGA */}
              <div class="flex flex-row gap-2">
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce"></div>
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </div>
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
