import Link from "next/link";

export default function NavbarADM(){
    return(
      <div className="navbar bg-base-100 shadow-3xl">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           <li><Link href="/software">Medicos</Link></li>
           <li><Link href="/about">Quienes Somos</Link></li>
           <li><Link href="/perfil">Informacion</Link></li>
           <li><Link href="/administracionM">test</Link></li>
           
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">DEIA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           <li><Link href="/software">Medicos</Link></li>
           <li><Link href="/perfil">Informacion</Link></li>
           {/* <li><Link href="/login">Log in</Link></li> */}
           <li><Link href="/about">Quienes Somos</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button>nombre del medico</button>
        {/* <button className="btn bg-[#F9A620] border-none"><Link href="/login">Login</Link></button> */}
      </div>
    </div>
    )
}
//             <div className=" drawer bg-white-900 z-40 shadow-md ">
//   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
//   <div className="drawer-content flex flex-col">

//     <div className="w-full navbar ">
//       <div className="flex-none lg:hidden">
//         <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//         </label>
//       </div> 
//       <button className="flex-1 px-2 mx-2 text-neutral-600 font-bold"><Link href="/">DEIA</Link></button>
//       <div className="flex-none hidden lg:block">
//         <ul className= "menu menu-horizontal mr-30 text-neutral-600 font-bold">
        
//           <li><Link href="/software">Perfil</Link></li>
//           <li><Link href="/about">Quienes Somos</Link></li>
//           <li><Link href="/perfil">Informacion</Link></li>
//           <li><Link href="/login">Log in</Link></li>

//         </ul>
//       </div>
//     </div>
   
    
//   </div> 
//   <div className="drawer-side">
//     <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
//     <ul className="menu p-4 w-80 min-h-full bg-base-200">
    
//       <li><Link href="/software">Software</Link></li>
//       <li><Link href="/about">About</Link></li>
//       <li><Link href="/perfil">perfil</Link></li>
//       <li><Link href="/login">Log in</Link></li>
//     </ul>
//   </div>
  
// </div>