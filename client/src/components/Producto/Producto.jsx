import style from "./producto.module.css"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Producto = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            id: 1,
            dato: "Actualiza inventario en segundos",
            complemento: "Visión computacional a una fotografía de distancia para actualizar cantidades en almacen",
            logo: "https://api.iconify.design/material-symbols:view-in-ar-outline.svg?color=%2300acca"
        },
        {
            id: 2,
            dato: "Predicciones y proyecciones",
            complemento: "Algoritmo de aprendizaje automático ML para proyección de comportamiento futuro de operaciones y productos de inventario",
            logo: "https://api.iconify.design/material-symbols-light:chart-data-rounded.svg?color=%2300acca"
        },
        {
            id: 4,
            dato: "Siempre informado",
            complemento: "Notificaciones de stock, alertas de datos anomalos e insights de valor explicados en lenguaje natural",
            logo: "https://api.iconify.design/material-symbols:circle-notifications.svg?color=%2300acca"
        }
    ]
    const datosEN = [
        {
            "id": 1,
            "dato": "Inventory updates in seconds",
            "complemento": "Computer vision a photograph away to update quantities in storage",
            "logo": "https://api.iconify.design/material-symbols-light:chart-data-rounded.svg?color=%2300acca"
        },
        {
            "id": 2,
            "dato": "Predictions and projections",
            "complemento": "Machine learning ML algorithm for projecting future behavior of inventory operations and products",
            "logo": "https://api.iconify.design/material-symbols-light:chart-data-rounded.svg?color=%2300acca"
        },
        {
            "id": 4,
            "dato": "Always informed",
            "complemento": "Stock notifications, anomaly data alerts and valuable insights explained in natural language",
            "logo": "https://api.iconify.design/material-symbols:circle-notifications.svg?color=%2300acca"
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
                <img className={style.imagenTitulo} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1710369520/TECDE/Industriapro_smbdli.png" alt={"TECDE IndustrIA Pro"} />
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
                    <button className={style.callBotonBan}>{idiomaActual === "es" ? "AGENDA UNA DEMO" : "SCHEDULE A DEMO"}</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Producto