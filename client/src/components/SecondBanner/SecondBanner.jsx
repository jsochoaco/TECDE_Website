import style from "./secondbanner.module.css"
import {useSelector } from "react-redux"

const SecondBanner = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h3 className={style.tituloBanner}> {idiomaActual === "es" ? "¿Quienes somos?":"Who we are?"} </h3>
                <div className={style.bannerUs}>
                    <div className={style.componentUs}>
                        <img className={style.imgBanners} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1697063757/TECDE/undraw_engineering_team_a7n2_lzsq0h.svg" alt="Ilustracion"/>
                    </div>
                    <div className={style.componentUs}>
                        <h4 className={style.parrafoBanner}>{idiomaActual === "es" ? "Diseñamos y damos soluciones de alta tecnología que resuelven problemas de la industria en el marco de la transformación tecnológica, la automatización de procesos y eficiencia operativa.":"We design and offer high-quality engineering solutions that tackle industry challenges within the context of technological transformation, process automation, and operational efficiency."}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondBanner