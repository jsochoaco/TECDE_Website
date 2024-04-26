import style from "./secondbanner.module.css"
import {useSelector } from "react-redux"

const SecondBanner = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            numero: "10",
            id: 1,
            dato: "empresas",
            complemento: "han confiado su operación en la tecnología de TECDE"
        },
        {
            numero: "7",
            id: 2,
            dato: "productos ",
            complemento: "desarrollados a la medida"
        },
        {
            numero: "80%",
            id: 3,
            dato: "de nuestros clientes",
            complemento: "continúan mes a mes confiando en TECDE"
        }
    ]
    const datosEN = [
        {
            numero: "10",
            id: 1,
            dato: "companies",
            complemento: "have entrusted their operations to TECDE's technology"
        },
        {
            numero: "7",
            id: 2,
            dato: "customized products",
            complemento: "developed to meet specific needs"
        },
        {
            numero: "80%",
            id: 3,
            dato: "of our clients",
            complemento: "continue to trust TECDE month after month"
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
                <h3 className={style.tituloBanner}> {idiomaActual === "es" ? "¿Quienes somos?":"Who we are?"} </h3>
                <div className={style.bannerUs}>
                    <div className={style.componentUs}>
                        <h4 className={style.parrafoBanner}>{idiomaActual === "es" ? "Estamos comprometidos a integrar las capacidades industriales de las empresas en Latinoamérica a través de Inteligencia Artificial, Analisis de datos y Transformación tecnologica. TECDE se compromete a ser tu socio estratégico en el camino hacia la transformación digital, eliminando barreras y proporcionando soluciones rápidas y eficaces para impulsar el éxito sostenible de tu empresa.":"We are committed to integrating the industrial capabilities of companies in Latin America through Artificial Intelligence, Data Analytics and Technology Transformation. TECDE is committed to be your strategic partner on the road to digital transformation, removing barriers and providing fast and effective solutions to drive the sustainable success of your company."}</h4>
                    </div>
                    <div className={style.divDatos}>
                        {datosDisplay.map((dato) => (
                        <div key={dato.id} className={style.divDato}>
                        <h2 className={style.numero}>{dato.numero}</h2>
                        <h4 className={style.dato}>{dato.dato}</h4>
                        <p className={style.complemento}>{dato.complemento}</p>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondBanner