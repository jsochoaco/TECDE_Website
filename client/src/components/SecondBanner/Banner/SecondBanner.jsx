import style from "./secondbanner.module.css"



const SecondBanner = () => {


    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h3 className={style.tituloBanner}> ¿Qué hacemos?</h3>
                <div className={style.bannerUs}>
                    <div className={style.componentUs}>
                        <img className={style.imgBanner} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1697063757/TECDE/undraw_engineering_team_a7n2_lzsq0h.svg" alt="Ilustracion"/>
                    </div>
                    <div className={style.componentUs}>
                        <h4 className={style.parrafoBanner}>Diseñamos y damos soluciones de alta ingeniería que resuelven problemas de la industria en el marco de la transformación tecnológica, la automatización de procesos y eficiencia operativa.</h4>
                    </div>
                </div>
            </div>
            <div className={style.divFantasma}>
            </div>
        </div>
    )
}

export default SecondBanner