import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import style from "./navbar.module.css"
import { NavLink, useLocation } from "react-router-dom"
import { setIdioma, setDatLiveBoton } from "../../redux/actions";
import { Link } from 'react-scroll';

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

    const toggleMenu = (event) => {
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
                    <img className={style.imagenNav} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1710370582/TECDE/tecdewi_wsxgik.png" alt="LogoBlancoTECDE" />
                </NavLink>
            </div>
            <div className={style.divOpciones}>
                {location.pathname.includes("blog") ? (
                    <NavLink to="/">
                        <button className={location.pathname === "/" ? style.onNavBar : style.offNavBar}>{idiomaActual === "es" ? "Inicio" : "Home"}</button>
                    </NavLink>
                ) :(<Link to="banner" className={style.offNavBar} smooth={true} duration={500} offset={-100}>{idiomaActual === "es" ? "Inicio" : "Home"}</Link>)}
                {location.pathname.includes("blog") ? (null):(
                    <Link to="secondBanner" className={style.offNavBar} smooth={true} duration={500} offset={-100}>{idiomaActual === "es" ? "Nosotros" : "About Us"}</Link>
                )}
                {location.pathname.includes("blog") ? (null) : (
                    <Link to="producto" className={style.offNavBar} smooth={true} duration={500} offset={-100}>{idiomaActual === "es" ? "Productos" : "Products"}</Link>
                )}
                {location.pathname.includes("blog") ? (null) : (
                    <Link to="bannerPartner" className={style.offNavBar} smooth={true} duration={500} offset={-100}>{idiomaActual === "es" ? "Partners" : "Partners"}</Link>
                )}
                {location.pathname.includes("blog") ? (null) : (
                    <Link to="bannerCita" className={style.offNavBar} smooth={true} duration={500} offset={-100}>{idiomaActual === "es" ? "Contacto" : "Contact us"}</Link>
                )}
                <NavLink to="/blog">
                    <button className={location.pathname === "/blog" ? style.onNavBar : style.offNavBar}>{idiomaActual === "es" ? "Blog" : "Blog"}</button>
                </NavLink>
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
                <Link to="banner" className={style.offNavBar} smooth={true} duration={500} offset={-100} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Inicio" : "Home"}</Link>
                <Link to="secondBanner" className={style.offNavBar} smooth={true} duration={500} offset={-100} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Nosotros" : "About Us"}</Link>
                <Link to="producto" className={style.offNavBar} smooth={true} duration={500} offset={-100} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Productos" : "Products"}</Link>
                <Link to="bannerPartner" className={style.offNavBar} smooth={true} duration={500} offset={-100} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Partners" : "Partners"}</Link>
                <Link to="bannerCita" className={style.offNavBar} smooth={true} duration={500} offset={-100} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Contacto" : "Contact us"}</Link>
                <NavLink to="/blog">
                    <button className={location.pathname === "/blog" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>{idiomaActual === "es" ? "Blog" : "Blog"}</button>
                </NavLink>
                <button className={style.offNavBar} onClick={()=> {handleIdioma();setIsMenuOpen(false)}}><img src={idiomaActual === "es" ? "https://api.iconify.design/emojione:flag-for-colombia.svg?color=%2300acca" : "https://api.iconify.design/emojione:flag-for-united-states.svg?color=%2300acca"} alt="flagLanguage"/> {idiomaActual === "es" ? "ES " : "EN"}</button>
                </div>
            </div>)}
        </div>
    )
}

export default NavBar