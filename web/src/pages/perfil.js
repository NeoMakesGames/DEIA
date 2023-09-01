import Navbar from "@/components/navbar"
export default function Perfil(){
    return(
        <main>
            <Navbar/>
            {/* <h1></h1> */}
            <div className="flex w-full p-4">
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">datos importantes</div>
  <div className="divider divider-horizontal"></div>
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">historial</div>
</div>
        </main>
    )
}