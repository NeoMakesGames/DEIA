import { Bubblegum_Sans } from 'next/font/google';
import React from 'react';

export default function Barra(){
    return (
        <div class="navbar bg-base-500">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-500 rounded-box w-52">
              <li><a>Inicio</a></li>
              <li><a>Software</a></li>
              <li><a>Sobre nuestro proyecto</a></li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost normal-case text-xl">DEIA</a>
        </div>
        <div class="navbar-end">
            <button class="btn btn-primary">Log In</button>
                {/* poner log in */}
        </div>
      </div>
)};