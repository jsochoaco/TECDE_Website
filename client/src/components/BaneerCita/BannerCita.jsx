import {Link} from "react-router-dom"
import style from "./BannerCita.module.css"

const BannerCita = () => {
    return (
        <div className={style.divContenedorCita}>
            <div className={style.divMensaje}>
                <h3 className={style.textoMensaje}>Súmate a nuestra meta de democratizar la tecnología en la industria latinoamericana</h3>
                <img className={style.imgMensaje} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1697159288/TECDE/undraw_collaborating_re_l43g_1_wbwrlp.svg" alt="Colaborar" />
            </div>
            <div className={style.divBoton}>
                <Link to="https://calendar.app.google/sp6EayTANvrXm5M47" target="_blank">
                    <button className={style.botonCalendar}>¡Deseo obtener más información!</button>
                </Link>
            </div>
        </div>
    )
}

export default BannerCita