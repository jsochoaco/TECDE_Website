import style from "./banner.module.css"
import { NavLink} from "react-router-dom"

const Banner = () => {


    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h1 className={style.tituloBanner}> Nuestra ingeniería abre nuevas oportunidades para tu empresa </h1>
                <h2 className={style.parrafoBanner}>Con nuestros servicios podrás impulsar la innovación y la eficiencia en tus operaciones, a través de optimización de procesos, implementación de tecnologías de última generación y desarrollo de soluciones personalizadas</h2>
                <NavLink to="/servicios">
                <button className={style.callBotonBan}>Nuestros servicios</button>
                </NavLink>
            </div>
            <div className={style.divFantasma}>
            </div>
        </div>
    )
}

export default Banner