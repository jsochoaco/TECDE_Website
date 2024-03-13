import style from "./producto.module.css"
import {useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Productofluxia = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            id: 1,
            dato: "Procesamiento masivo de archivos",
            complemento: "Carga y descarga grandes cantidad de archivos en diferente formatos y sistemas",
            logo: "https://api.iconify.design/material-symbols:drive-file-move-sharp.svg?color=%2300acca"
        },
        {
            id: 2,
            dato: "Webscraping y extracción",
            complemento: "Extrae automaticamente información del mercado y procesala en tiempo real",
            logo: "https://api.iconify.design/material-symbols:android.svg?color=%2300acca"
        },
        {
            id: 3,
            dato: "Automatiza procesos operativos",
            complemento: "Con nuestro bot podrás realizar de manera automatica y precisa cualquier proceso digital",
            logo: "https://api.iconify.design/carbon:ibm-event-automation.svg?color=%2300acca"
        }
    ]
    const datosEN = [
        {
            id: 1,
            dato: "Procesamiento masivo de archivos",
            complemento: "Carga y descarga grandes cantidad de archivos en diferente formatos y sistemas",
            logo: "https://api.iconify.design/material-symbols:drive-file-move-sharp.svg?color=%2300acca"
        },
        {
            id: 2,
            dato: "Webscraping y extracción",
            complemento: "Extrae automaticamente información del mercado y procesala en tiempo real",
            logo: "https://api.iconify.design/material-symbols:android.svg?color=%2300acca"
        },
        {
            id: 3,
            dato: "Automatiza procesos operativos",
            complemento: "Con nuestro bot podrás realizar de manera automatica y precisa cualquier proceso digital",
            logo: "https://api.iconify.design/carbon:ibm-event-automation.svg?color=%2300acca"
        }               
    ]
    var datosDisplay = "";
    if (idiomaActual === "es") {
        datosDisplay = datos;
    } 
    else {
        datosDisplay = datosEN;
    }
    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
            <img className={style.imagenTitulo} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1710369520/TECDE/fluxiapro_xvcfib.png" alt={"TECDE IndustrIA Pro"} />
                <div className={style.bannerUs}>
                    <div className={style.divDatos}>
                        {datosDisplay.map((dato) => (
                        <div key={dato.id} className={style.divDato}>
                            <div className={style.numero}>
                            <img className={style.img} src={dato.logo} alt={"TECDE " + dato.dato} />
                            </div>
                        <h4 className={style.dato}>{dato.dato}</h4>
                        <p className={style.complemento}>{dato.complemento}</p>
                        </div>))}
                    </div>
                </div>
                <NavLink to="https://calendar.app.google/A596zaWLc5NFA3iQ9" target="_blank">
                        <button className={style.callBotonBan}>{idiomaActual === "es" ? "AGENDA UNA DEMO":"SCHEDULE A DEMO"}</button>
                    </NavLink>
            </div>
        </div>
    )
}

export default Productofluxia