import Navbar from "@/components/navbar"
export default function Perfil(){
    return(
        <main>
            <Navbar/>
            {/* <h1></h1> */}
            <div class="flex w-full p-4">
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">datos importantes</div>
  <div class="divider divider-horizontal"></div>
  <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">historial</div>
</div>
        </main>
    )
}