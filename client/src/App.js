import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from './paginas/Home/Home';
import Nosotros from './paginas/Nosotros/Nosotros';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
