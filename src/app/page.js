import Image from 'next/image'
import styles from './page.module.css'
import Barra from './componentes/nav_bar'

export default function Home() {
  return (
   <div>
     <h1 class="titulo">Deia</h1>
     <Barra />
   </div>
   
  )
}
