import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import {useEffect, useState} from 'react';
import {getSession, signIn} from "next-auth/react";
import pb from '@/../public/lib/pocketbase.js';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  
  return (
    <main>
      <Navbar/>
  
      <div className="hero min-h-screen h-screen
    bg-gradient-to-r
    from-blue-100
    via-white-500
    to-base-500
    background-animate flex justify-center">

        <div className="hero-content text-left">
          <div className="w-full px-4">
            <h1 className="text-5xl font-bold">DEIA</h1>
            <p className="py-6 ">Continuamos generando este proyecto, pero en unos meses va a ser mejor.</p>
            <button className="btn btn-primary"><Link href="/login">Get Started</Link></button>
            <button className="btn bg-accent" onClick={ () => {signIn("")}}>Enviar/Login con auth</button>
            <input type="date" className="btn"/>
        
          </div>
        </div>
        <div className="avatar p-4">
            {/* ACA DEBE IR EL LOGO */}
        <div className="w-96 flex bg-red-400 rounded-full shadow-2xl"></div>
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </main>
  )
}