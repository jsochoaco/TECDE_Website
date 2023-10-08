import { useState, useEffect, useRef } from "react";
import style from "./navbar.module.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    return (
        <div className={style.divNavbar}>
            <div className={style.divImagen}>
                <img className={style.imagenNav} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1696731568/TECDE/Tecde_horizontal_white_a2nqve.png" alt="LogoBlancoTECDE" />
            </div>
            <div className={style.divOpciones}>
                <Link>
                <button className={style.offNavBar}>Nosotros</button>
                </Link>
                <Link>
                <button className={style.offNavBar}>Servicios</button>
                </Link>
                <Link>
                <button className={style.offNavBar}>Trayectoria</button>
                </Link>
                <Link>
                <button className={style.offNavBar}>Contacto</button>
                </Link>
            </div>
            <div className={style.divIconMenu}>
                <button className={style.offNavBar} onClick={toggleMenu}>
                    <img className={style.iconMenu} src="https://api.iconify.design/ic:baseline-menu.svg?color=%2300acca" alt="IconMenu" />
                </button>
            </div>
            {isMenuOpen && (
            <div ref={menuRef} className={style.divMenu}>
                <div className={style.listMenu}>
                    <NavLink to="/nosotros">
                        <button className={style.offNavBar}>Nosotros</button>
                    </NavLink>
                    <NavLink to="/servicios"> 
                        <button className={style.offNavBar}>Servicios</button>
                    </NavLink>
                    <NavLink to="/trayectoria"> 
                        <button className={style.offNavBar}>Trayectoria</button>
                    </NavLink>
                    <NavLink to="/contacto"> 
                        <button className={style.offNavBar}>Contacto</button>
                    </NavLink>
                </div>
            </div>)}
        </div>
    )
}

export default NavBar