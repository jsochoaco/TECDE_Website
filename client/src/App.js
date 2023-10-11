import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from './paginas/Home/Home';
import Nosotros from './paginas/Nosotros/Nosotros';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
      </Routes>
    </div>
  );
}

export default App;
