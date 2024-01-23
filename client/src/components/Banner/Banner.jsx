import style from "./banner.module.css"
import {useSelector } from "react-redux"
import {NavLink} from "react-router-dom"

const Banner = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h1 className={style.tituloBanner}>{idiomaActual === "es" ? "Tu empresa y su operación en tus manos":"Your company and its operation in your hands"}</h1>
                <h2 className={style.parrafoBanner}>{idiomaActual === "es" ? "Te ofrecemos acceso y entendimiento de tu activo intangible más valioso: tus datos. Con el acceso correcto a la información, nunca más sentirás tu negocio fuera de control y podrás tomar cada decisión con mayor claridad":"We offer you access to and understanding of your most valuable intangible asset: your data. With the right access to information, you will never again feel your business out of control and will be able to make every decision with greater clarity."}</h2>
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