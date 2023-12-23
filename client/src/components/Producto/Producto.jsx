import style from "./producto.module.css"
import {useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Producto = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            id: 1,
            dato: "Software ERP",
            complemento: "Gestiona toda tu operación desde un solo lugar. Centralizando tus datos poidrás  obtener todo el potencial de los mismos",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086543/TECDE/undraw_code_review_re_woeb_2_yaadex.svg"
        },
        {
            id: 2,
            dato: "Métricas en tiempo real",
            complemento: "En un solo lugar  y con un solo toque. Sabrás el estado de tu negocio vayas donde vayas.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086711/TECDE/undraw_product_iteration_kjok_fo5lcz.svg"
        },
        {
            id: 3,
            dato: "Predicciones y proyecciones",
            complemento: "Un asistente de negocio que te ayuda a tomar mejores decisiones basado en tus propios datos. Tu mano derecha impulsada por IA. ",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086659/TECDE/undraw_chat_bot_re_e2gj_zymenq.svg"
        },
    ]
    const datosEN = [
        {
            id: 1,
            dato: "ERP Software",
            complemento: "Manage your entire operation from a single place. By centralizing your data, you can unlock their full potential.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086543/TECDE/undraw_code_review_re_woeb_2_yaadex.svg"
        },
        {
            id: 2,
            dato: "Real-time Metrics",
            complemento: "In one place and with a single touch. You'll know the state of your business wherever you go.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086711/TECDE/undraw_product_iteration_kjok_fo5lcz.svg"
        },
        {
            id: 3,
            dato: "Predictions, Projections, and Recommendations",
            complemento: "A business assistant that helps you make better decisions based on your own data. Your right-hand powered by AI.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086659/TECDE/undraw_chat_bot_re_e2gj_zymenq.svg"
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
                <h3 className={style.tituloBanner}> {idiomaActual === "es" ? "IndustrIA Pro":"IndustrIA Pro"} </h3>
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
                    <NavLink to="https://calendar.app.google/A596zaWLc5NFA3iQ9" target="_blank">
                <button className={style.callBotonBan}>{idiomaActual === "es" ? "AGENDA UNA DEMO":"SCHEDULE A DEMO"}</button>
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Producto