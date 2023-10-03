import Link from "next/link";

export default function Navbar(){
    return(
            <div className="drawer z-40 shadow-md">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">

    <div className="w-full navbar bg-white-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <button className="flex-1 px-2 mx-2 text-neutral-600 font-bold"><Link href="/">DEIA</Link></button>
      <div className="flex-none hidden lg:block">
        <ul className= "menu menu-horizontal mr-30 text-neutral-600 font-bold">
        
          <li><Link href="/software">Software</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/perfil">perfil</Link></li>
          <li><Link href="/login">Log in</Link></li>

        </ul>
      </div>
    </div>
   
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
    
      <li><Link href="/software">Software</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/perfil">perfil</Link></li>
      <li><Link href="/login">Log in</Link></li>
    </ul>
  </div>
  
</div>

    )
}