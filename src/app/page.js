"use client";
import Barra from './componentes/nav_bar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '@/app/paginas/about'

export default function Home() {
  return (
   <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/software">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
          </ul>
        </nav>
  
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/software">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}
