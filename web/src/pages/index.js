import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">DEIA</h1>
      <p class="py-6">Continuamos generando este proyecto, pero en unos meses va a ser mejor.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </main>


  )
}
