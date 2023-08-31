import Link from "next/link";

export default function Navbar(){
    return(
            <div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">

    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2"><Link href="/">DEIA</Link></div>
      <div className="flex-none hidden lg:block">
        <ul className= "menu menu-horizontal">
         
          <li><Link href="/software">Software</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/perfil">perfil</Link></li>

        </ul>
      </div>
    </div>
   
    
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
    
      <li><Link href="/software">Software</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/perfil">perfil</Link></li>
      
    </ul>
    
  </div>
  
</div>

    )
}