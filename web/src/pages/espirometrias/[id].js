import { useRouter } from "next/router";
import DetallesPaciente from "@/components/detallesPaciente";
import Navbar from "@/components/navbar";

const entradaPaciente = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
      <Navbar />
      <div className="bg-[#DBE3FF] overflow-y-auto">
        <div className="flex justify-center items-center flex-col">
          {/* titulo y divisor */}
          <div className="h-screen w-full flex justify-start items-center flex-col">
            <h1 className="text-black text-[35px] font-extrabold my-[40px]">
              Espirometría n° {id}
            </h1>
            <div className="w-11/12 bg-slate-800 h-px"></div>
            <DetallesPaciente id={id} />
            <div className="w-11/12 bg-slate-800 h-px"></div>
            
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
