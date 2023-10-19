import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Home from './paginas/Home/Home';
import Nosotros from './paginas/Nosotros/Nosotros';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Contacto from './paginas/Contacto/Contacto';
import Servicios from './paginas/Servicios/Servicios';
import { useDispatch} from "react-redux"
import { setIdioma } from './redux/actions';
import Trabaja from './paginas/Trabaja/Trabaja';

function App() {
  const browserLanguage = navigator.language;
  const languageParts = browserLanguage.split('-');
  const languageCode = languageParts[0];
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(setIdioma(languageCode))
  }, [browserLanguage])

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/unete' element={<Trabaja/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

