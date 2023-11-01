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
          <div className="flex justify-center items-center flex-col h-screen w-4/5 bg-amber-300">
          <h1>Espirometría n° {id}</h1>
          <DetallesPaciente id={id} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default entradaPaciente;
