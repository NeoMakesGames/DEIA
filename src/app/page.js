import Barra from './componentes/nav_bar'
import Auth from "./Auth"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Home() {
  return (
   <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
          </ul>
        </nav>

     </div>
    </Router>
    </div>
  )
}
