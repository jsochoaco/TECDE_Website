import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import style from "./navbar.module.css"
import { Link, NavLink, useLocation } from "react-router-dom"
import { setIdioma, setDatLiveBoton } from "../../redux/actions";

const NavBar = () => {
    const dispatch = useDispatch()
    const idiomaActual = useSelector((state) => state.idioma)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation()
    const menuRef = useRef(null);
    useEffect(() => {
      function handleDocumentClick(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
      document.addEventListener('click', handleDocumentClick);
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);

    const toggleMenu = () => {
        event.stopPropagation(); // Evita que el evento se propague al documento
        setIsMenuOpen(!isMenuOpen);
    };

    const handleIdioma = () => {
        if(idiomaActual === "es") {
            dispatch(setIdioma("en"))
            dispatch(setDatLiveBoton("en"))
        }
        else {
            dispatch(setIdioma("es"))
            dispatch(setDatLiveBoton("es"))
        }
    }
    return (
        <div className={style.divNavbar}>
            <div className={style.divImagen}>
                <NavLink to="/">
                <img className={style.imagenNav} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1696731568/TECDE/Tecde_horizontal_white_a2nqve.png" alt="LogoBlancoTECDE" />
                </NavLink>
            </div>
            <div className={style.divOpciones}>
                <Link to="/">
                <button className={location.pathname === "/" ? style.onNavBar : style.offNavBar}>{idiomaActual === "es" ? "Inicio" : "Home"}</button>
                </Link>
                <Link to="/nosotros">
                <button className={location.pathname === "/nosotros" ? style.onNavBar : style.offNavBar}>{idiomaActual === "es" ? "Nosotros" : "About Us"}</button>
                </Link>
                <Link to = "/servicios" >
                <button className={location.pathname === "/servicios" ? style.onNavBar : style.offNavBar}>{idiomaActual === "es" ? "Servicios" : "Services"}</button>
                </Link>
                <Link to = "/unete">
                <button className={location.pathname === "/unete" ? style.onNavBar : style.offNavBar}>{idiomaActual === "es" ? "Únete a TECDE" : "Join to TECDE"}</button>
                </Link>
                {/* <Link>
                <button className={location.pathname === "/trayectoria" ? style.onNavBar : style.offNavBar}>Trayectoria</button>
                </Link> */}
                <Link to = "/contacto">
                <button className={location.pathname === "/contacto" ? style.onNavBar : style.offNavBar}>{idiomaActual === "es" ? "Contacto" : "Contact"}</button>
                </Link>
                <button className={style.offNavBar} onClick={handleIdioma} ><img src={idiomaActual === "es" ? "https://api.iconify.design/emojione:flag-for-colombia.svg?color=%2300acca" : "https://api.iconify.design/emojione:flag-for-united-states.svg?color=%2300acca"} alt="flagLanguage" /> {idiomaActual === "es" ? "ES " : "EN"}</button>
            </div>
            <div className={style.divIconMenu}>
                <button className={style.offNavBar} onClick={toggleMenu}>
                    <img className={style.iconMenu} src="https://api.iconify.design/ic:baseline-menu.svg?color=%2300acca" alt="IconMenu" />
                </button>
            </div>
            {isMenuOpen && (
            <div ref={menuRef} className={style.divMenu}>
                <div className={style.listMenu}>
                    <NavLink to="/">
                        <button className={location.pathname === "/" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Inicio" : "Home"}</button>
                    </NavLink>
                    <NavLink to="/nosotros">
                        <button className={location.pathname === "/nosotros" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Nosotros" : "About Us"}</button>
                    </NavLink>
                    <NavLink to="/unete"> 
                        <button className={location.pathname === "/unete" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Únete" : "Join to TECDE"}</button>
                    </NavLink>
                    <NavLink to="/servicios"> 
                        <button className={location.pathname === "/servicios" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Servicios" : "Services"}</button>
                    </NavLink>
                    {/* <NavLink to="/trayectoria"> 
                        <button className={location.pathname === "/trayectoria" ? style.onNavBar : style.offNavBar}>Trayectoria</button>
                    </NavLink> */}
                    <NavLink to="/contacto"> 
                        <button className={location.pathname === "/contacto" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Contacto" : "Contact"}</button>
                    </NavLink>
                    <button className={style.offNavBar} onClick={()=> {handleIdioma();setIsMenuOpen(false)}}><img src={idiomaActual === "es" ? "https://api.iconify.design/emojione:flag-for-colombia.svg?color=%2300acca" : "https://api.iconify.design/emojione:flag-for-united-states.svg?color=%2300acca"} alt="flagLanguage"/> {idiomaActual === "es" ? "ES " : "EN"}</button>
                </div>
            </div>)}
        </div>
    )
}

export default NavBar