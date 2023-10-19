import style from "./servicios.module.css"
import { useSelector } from "react-redux"

const Servicios = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    return (
        <div className={style.divBannerServ}>
            <h1 className={style.ServiciosTitulo}>{idiomaActual === "es" ? "Servicios de ingeniería":"Engineering Services"}</h1>
            <h2 className={style.Secundario}>{idiomaActual === "es" ? "Sección en construcción":"Section under construction"}</h2>
            <img className={style.imgUnder} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1697496153/TECDE/undraw_under_construction_-46-pa_xyeix2.svg" alt="TecdeUnderConstr" />
        </div>
    )
}

export default Servicios