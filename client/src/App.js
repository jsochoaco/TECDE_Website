import './App.css';
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/servicios' element={<Servicios/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
