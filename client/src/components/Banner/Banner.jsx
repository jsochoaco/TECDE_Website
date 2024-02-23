import style from "./banner.module.css"
import {useSelector } from "react-redux"
import {NavLink} from "react-router-dom"

const Banner = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h1 className={style.tituloBanner}>{idiomaActual === "es" ? "Potenciamos tu empresa con soluciones tecnológicas avanzadas ":"We enhance your business with advanced technological solutions"}</h1>
                <h2 className={style.parrafoBanner1}>{idiomaActual === "es" ? "para la gestión y procesamiento de datos":"for data management and processing."}</h2>
                <h3 className={style.parrafoBanner}>{idiomaActual === "es" ? "Aumentamos tu capacidad de tomar decisiones informadas y disminuimos los tiempos y procesos que necesitas para acceder a tus datos":"We increase your capacity to make informed decisions and reduce the time and processes to access your data"}</h3>
                <NavLink to="https://calendar.app.google/A596zaWLc5NFA3iQ9" target="_blank">
                <button className={style.callBotonBan}>{idiomaActual === "es" ? "AGENDA UNA DEMO":"SCHEDULE A DEMO"}</button>
                </NavLink>
            </div>
            <div className={style.divFantasma}>
            </div>
        </div>
    )
}
export default Banner