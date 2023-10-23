import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import {useEffect, useState} from 'react';
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
            <button className="btn bg-accent">Enviar/Login con auth</button>
            <input type="date" className="btn"/>

          </div>
        </div>
        <div className="avatar p-4">
            {/* ACA DEBE IR EL LOGO */}
        {/*<img src="/logoMinimalista.jpg" className="w-40 h-40" alt=""/>*/}
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </main>
  )
}