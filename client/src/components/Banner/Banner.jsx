import style from "./banner.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useLocation } from "react-router-dom"

const Banner = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h1 className={style.tituloBanner}>{idiomaActual === "es" ? " Nuestra ingeniería abre nuevas oportunidades para tu empresa ":"Our engineering unlocks new opportunities for your company"}</h1>
                <h2 className={style.parrafoBanner}>{idiomaActual === "es" ? "Con nuestros servicios podrás impulsar la innovación y la eficiencia en tus operaciones, a través de optimización de procesos, implementación de tecnologías de última generación y desarrollo de soluciones personalizadas":"With our services, you can drive innovation and efficiency in your operations by optimizing processes, implementing leading-edge technologies, and crafting tailor-made solutions, all designed to elevate your business"}</h2>
                <NavLink to="/">
                <button className={style.callBotonBan}>{idiomaActual === "es" ? "Nuestros servicios":"Our services"}</button>
                </NavLink>
            </div>
            <div className={style.divFantasma}>
            </div>
        </div>
    )
}

export default Banner