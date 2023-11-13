import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import {useEffect, useState} from 'react';
import NavbarSinsesion from '@/components/navbarSinsesion';
import { lookForEsp } from './hooks/server.hooks';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {

  const [session, setSession] = useState(false)

  return (
    <main>
{!session ? (
                <NavbarSinsesion/>
              ) : (<Navbar/>)}
      <div className="hero min-h-screen h-screen
    bg-[#E6F0F4]
    background-animate flex justify-center">

        <div className="hero-content text-left">
          <div className="w-full px-4">
            <h1 className="text-5xl font-bold">D E I A</h1>
            <p className="py-6 ">Continuamos generando este proyecto, pero en unos meses va a ser mejor.</p>
            <Link className="btn bg-sky-700" href="/login">Get Started</Link>
            </div>
        </div>
        <div className="w-[500px] rounded-full overflow-hidden ">
            {/* ACA DEBE IR EL LOGO */}
        <img src="/logoMinimalista.jpg"   alt=""/>
        </div>
      </div>
    {/* ACA VA EL ABOUT */}
      <div>
        <div></div>
        <img src="/aboutUs.jpg"></img>
        <img src="/information.jpg"></img>
      </div>

    </main>
  )
}