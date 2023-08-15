import { Bubblegum_Sans } from 'next/font/google';
import React from 'react';

export default function Barra(){
    return (
<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">D.E.I.A</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          {/* menu horizontal */}
          <li><a>Software</a></li>
          <li><a>Sobre el proyecto</a></li>
          <li><a>Quienes somos</a></li>
        </ul>
      </div>
    </div>
    {/* contenido en content.pag.principal  */}
    
  </div> 

</div>
)};