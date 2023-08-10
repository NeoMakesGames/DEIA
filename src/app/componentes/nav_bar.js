import { Bubblegum_Sans } from 'next/font/google';
import React from 'react';

export default function Barra(){
    return (
    <nav class="barra">
        <div>
        <span class="self-center text-2xl font-semibold whitespace-nowrap txt-color-amber">DEIA</span>
        </div>
        <button class="bg-amber-300 hover:bg-amber-400 text-white py-3 px-3 rounded-md m-2  ">Log in</button>
    </nav>
)}