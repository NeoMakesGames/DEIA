import { postAI } from "@/pages/hooks/server.hooks"

export default function Diagnostico({diagnostico}){  

    return(
        <main>
        <div className=" w-full flex justify-start items-start flex-col">
            <h1 className="text-black text-[20px] font-bold my-[15px]  px-8">
              Diagnostico con IA
            </h1>
            <h2>{diagnostico? <h1>No es obstructivo</h1> : <h1>Es obstructivo</h1>}</h2>
            <div className="flex justify-center items-center ">
              {/* <h1 className="text-black text-[16px]  my-[15px]  px-8">
                Estamos procesando tu diagnóstico
              </h1>
              
              <div class="flex flex-row gap-2">
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce"></div>
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
              </div> */}
            </div>
            <div className="">
            <h3>DEIA es un modelo de ineligencia artficial en estado de desarrollo. Como proyecto estudiantil se asegura un error del 12%, con respecto a las espirometrias de entreno.</h3>
            <h3>DEIA no es un proyecto con certificados medicos abalados por ninguna organizacion. DEIA no tiene poder desición luego del diagnostico.s Coherencia por favor.</h3>
            </div>
          </div>
          </main>
    )
}