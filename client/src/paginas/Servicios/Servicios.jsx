import style from "./servicios.module.css"

const Servicios = () => {


    return (
        <div className={style.divBannerServ}>
            <h1 className={style.ServiciosTitulo}> Servicios de Ingeniería</h1>
            <h2 className={style.Secundario}>Sección en construcción</h2>
            <img className={style.imgUnder} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1697496153/TECDE/undraw_under_construction_-46-pa_xyeix2.svg" alt="TecdeUnderConstr" />
        </div>
    )
}

export default Servicios