import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from './paginas/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
