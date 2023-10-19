import {Link} from "react-router-dom"
import style from "./BannerCita.module.css"
import { useSelector } from "react-redux"

const BannerCita = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    return (
        <div className={style.divContenedorCita}>
            <div className={style.divMensaje}>
                <h3 className={style.textoMensaje}>{idiomaActual === "es" ? "Súmate a nuestra meta de democratizar la tecnología en la industria latinoamericana":"Join us in our mission to democratize technology in the Latin American industry"} </h3>
                <img className={style.imgMensaje} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1697159288/TECDE/undraw_collaborating_re_l43g_1_wbwrlp.svg" alt="Colaborar" />
            </div>
            <div className={style.divBoton}>
                <Link to="https://calendar.app.google/sp6EayTANvrXm5M47" target="_blank">
                    <button className={style.botonCalendar}>{idiomaActual === "es" ? "¡Deseo obtener más información!":"I wish to obtain more information!"}</button>
                </Link>
            </div>
        </div>
    )
}

export default BannerCita