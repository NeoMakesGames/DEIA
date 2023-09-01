import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">DEIA</h1>
      <p className="py-6">Continuamos generando este proyecto, pero en unos meses va a ser mejor.</p>
      <button classNameName="btn btn-primary"><Link href="/login">Get Started</Link></button>
    </div>
  </div>
</div>
    </main>


  )
}
