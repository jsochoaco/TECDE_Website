import style from "./producto.module.css"
import {useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Productoexia = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            id: 1,
            dato: "Extrae la información de documentos",
            complemento: "Facturas, talonarios, etiquetas, entre otros pueden sacarse para reportes personalizados ",
            logo: "https://api.iconify.design/material-symbols:eye-tracking-sharp.svg?color=%2300acca"
        },
        {
            id: 2,
            dato: "Cualquier formato común de documentos",
            complemento: "Sube documentos en PDF, imagenes y documentos docx",
            logo: "https://api.iconify.design/fa6-solid:file-pdf.svg?color=%2300acca"
        },
        {
            id: 3,
            dato: "Genera reportes",
            complemento: "de tus facturas como información de cierres y balances para contabilidad",
            logo: "https://api.iconify.design/icon-park-solid:table-report.svg?color=%2300acca"
        }
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
            <img className={style.imagenTitulo} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1710369520/TECDE/exiapro2_rg2w3v.png" alt={"TECDE IndustrIA Pro"} />
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

export default Productoexia