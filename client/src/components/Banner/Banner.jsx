import style from "./banner.module.css"



const Banner = () => {


    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h3 className={style.tituloBanner}> Descubre cómo nuestra ingeniería de punta abre nuevas oportunidades para tu empresa </h3>
                <h4 className={style.parrafoBanner}>Nuestros servicios están diseñados para impulsar la innovación y la eficiencia en tus operaciones, a través de optimización de procesos,implementación de tecnologías de última generación o desarrollo de soluciones personalizadas</h4>
                <button className={style.callBoton}>¡Conoce nuestros servicios!</button>
            </div>
            <div className={style.divFantasma}>
            </div>
        </div>
    )
}

export default Banner