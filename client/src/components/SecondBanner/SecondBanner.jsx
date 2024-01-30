import style from "./secondbanner.module.css"
import {useSelector } from "react-redux"

const SecondBanner = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            numero: "5",
            id: 1,
            dato: "empresas",
            complemento: "han confiado su operación en la tecnología de TECDE"
        },
        {
            numero: "3",
            id: 2,
            dato: "productos ",
            complemento: "desarrollados a la medida"
        },
        {
            numero: "90%",
            id: 3,
            dato: "de nuestros clientes",
            complemento: "continúan mes a mes confiando en TECDE"
        }
    ]
    const datosEN = [
        {
            numero: "5",
            id: 1,
            dato: "companies",
            complemento: "have entrusted their operations to TECDE's technology"
        },
        {
            numero: "3",
            id: 2,
            dato: "customized products",
            complemento: "developed to meet specific needs"
        },
        {
            numero: "90%",
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
                        <h4 className={style.parrafoBanner}>{idiomaActual === "es" ? "Nos posicionamos como líderes en la vanguardia de la innovación tecnológica, ofreciendo soluciones integrales con IA que potencian el crecimiento y la eficiencia operativa de las empresas. TECDE se compromete a ser tu socio estratégico en el camino hacia la transformación digital, eliminando barreras y proporcionando soluciones rápidas y eficaces para impulsar el éxito sostenible de tu empresa.":"We position ourselves as leaders at the forefront of technological innovation, offering comprehensive AI solutions that enhance the growth and operational efficiency of businesses. TECDE is committed to being your strategic partner on the path to digital transformation, eliminating barriers and providing quick and effective solutions to drive the sustainable success of your company"}</h4>
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