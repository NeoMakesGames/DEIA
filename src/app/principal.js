import Contenido from './componentes/content.pag.principal'

import Auth from "./Auth"
import { createBrowserRouter, Route, createRoutesFromElements  } from 'react-router-dom';

//paginas 
import Software from './paginas/page.software'
import Contenido from './content.pag.principal';
import { RouterProvider } from 'react-router-dom';
//import { Navbar } from 'react-daisyui';

//layout
import Barra from './componentes/nav_bar'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={Navbar}> 
          <Route index element={<Home/>}/>
          <Route path="software" element={<Software/>} />
        </Route>

    )

)


export default function Home() {
  return (
   <><div>
      <Barra />
      <Contenido />
    </div><RouterProvider router={router} /></>
  );
}
