import {Link} from "react-router-dom"
import style from "./BannerCita.module.css"
import { useSelector} from "react-redux"
import { useEffect } from "react"

const BannerCita = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    return (
        <div className={style.divContenedorCita}>
            <div className={style.divMensaje}>
                <h3 className={style.textoMensaje}>{idiomaActual === "es" ? "Súmate a nuestra meta de democratizar la tecnología en la industria latinoamericana":"Join us in our mission to democratize technology in the Latin American industry"} </h3>
                <img className={style.imgMensaje} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1697159288/TECDE/undraw_collaborating_re_l43g_1_wbwrlp.svg" alt="Colaborar" />
            </div>
            <iframe  className={style.frame} src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bu5v4FldFNmPmElQkDE-MeDcQgN7qx-9rms2NlpYxQIXMl1E8FdrT7N-wZphJMVfpU5YPJtVC?gv=true" width="80%" height="max-content" frameborder="0"></iframe>
        </div>
    )
}

export default BannerCita

