import style from "./producto.module.css"
import {useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Producto = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            id: 1,
            dato: "Predicciones y proyecciones",
            complemento: "Algoritmo de aprendizaje automático ML para proyección de comportamiento futuro",
            logo: "https://api.iconify.design/material-symbols-light:chart-data-rounded.svg?color=%2300acca"
        },
        {
            id: 2,
            dato: "Dashboard Interactivo",
            complemento: "Dashboard de KPIs y avance en OKRs de negocio",
            logo: "https://api.iconify.design/mdi:view-dashboard-variant.svg?color=%2300acca"
        },
        {
            id: 3,
            dato: "Siempre informado",
            complemento: "Notificaciones, alertas e insights de valor explicados en lenguaje natural",
            logo: "https://api.iconify.design/material-symbols:circle-notifications.svg?color=%2300acca"
        },
        {
            id: 4,
            dato: "Generación de informes",
            complemento: "de desempeño mensual automática y OnDemand",
            logo: "https://api.iconify.design/material-symbols:edit-document-rounded.svg?color=%2300acca"
        },
        {
            id: 5,
            dato: "Vinculación de datos",
            complemento: "Conexión a cualquier fuente de datos estructurados SQL o importación masiva",
            logo: "https://api.iconify.design/material-symbols:database-sharp.svg?color=%2300acca"
        },
    ]
    const datosEN = [
        {
            id: 1,
            dato: "Analysis of KPIs in natural language",
            complemento: "Understand in a straightforward manner what happens in your operation and what each indicator means. Make informed and quantified decisions.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/t_IA_2/v1698086543/TECDE/undraw_code_review_re_woeb_2_yaadex.svg"
          },
        {
            id: 2,
            dato: "Real-time Metrics",
            complemento: "In one place and with a single touch. You'll know the state of your business wherever you go.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/t_IA_2/v1698086711/TECDE/undraw_product_iteration_kjok_fo5lcz.svg"
        },
        {
            id: 3,
            dato: "Predictions, Projections, and Recommendations",
            complemento: "A business assistant that helps you make better decisions based on your own data. Your right-hand powered by AI.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/t_IA_2/v1698086659/TECDE/undraw_chat_bot_re_e2gj_zymenq.svg"
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
            <img className={style.imagenTitulo} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1706205839/TECDE/IndustriaProTECDE_mfxevi.png" alt={"TECDE IndustrIA Pro"} />
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

export default Producto