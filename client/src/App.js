import './App.css';
import { Route, Switch } from "react-router-dom";  // Importar Route y Switch, no Routes
import Home from './paginas/Home/Home';
import Nosotros from './paginas/Nosotros/Nosotros';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Contacto from './paginas/Contacto/Contacto';
import Servicios from './paginas/Servicios/Servicios';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch> {/* Cambiar de Routes a Switch */}
        <Route path='/' element={<Home/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/servicios' element={<Servicios/>} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;