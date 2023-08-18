import { Bubblegum_Sans } from 'next/font/google';
import React from 'react';

export default function Barra(){
    return (
    <nav className="barra">
        <div>
        <span className="">DEIA</span>
        
        </div>
        <button><a >Log in</a></button>
        <button><a  href=".\paginas\software.js">Software</a></button>
        <button><a  href=".\paginas\about.js">Sobre el proyecto</a></button>
        
    </nav>
)};