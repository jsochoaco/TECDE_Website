import style from "./servicios.module.css"
import {useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const BannerServicios = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            id: 1,
            dato: "Desarrollos a la medida",
            complemento: "En Tecde, compartimos la convicción de que cada empresa es única. Nos especializamos en ofrecer desarrollo de software y productos a medida, entendiendo los desafíos específicos de tu industria. Descubre cómo personalizamos soluciones para impulsar el éxito de Tecde y transformar tus procesos empresariales.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/t_IA_2/v1703089628/tc_tecde_zp7jvh.png"
        },
        {
            id: 2,
            dato: "On boarding IndustrIA Pro",
            complemento: "Nuestro servicio de OnBoarding para IndustrIA Pro de Tecde está diseñado para preparar a tu empresa de manera integral. Guiamos a tu equipo a través de una implementación fluida, proporcionando capacitación detallada y personalizada, asegurando que aproveches al máximo sus capacidades.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/t_IA_2/v1703192527/IndustriaPro_rfn8o9.png"
        },
        {
            id: 3,
            dato: "Integración de IA",
            complemento: "Nuestro servicio de Integración de IA redefine la toma de decisiones empresariales y la gestión basada en datos. Implementamos soluciones avanzadas que integran inteligencia artificial directamente en las operaciones, potenciando tus decisiones comerciales con análisis y procesamiento de datos avanzados. ",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/t_IA_2/v1703192191/IA_gaoacz.png"
        },
    ]
    const datosEN = [
        {
            id: 1,
            dato: "Customized Developments",
            complemento: "At Tecde, we share the belief that every company is unique. We specialize in providing custom software development and products, understanding the specific challenges of your industry. Discover how we tailor solutions to drive Tecde's success and transform your business processes.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703089628/tc_tecde_zp7jvh.png"
        },
        {
            id: 2,
            dato: "IndustrIA Pro Onboarding",
            complemento: "Our OnBoarding service for Tecde's IndustrIA Pro is designed to comprehensively prepare your company. We guide your team through a seamless implementation, providing detailed and personalized training, ensuring you make the most of its capabilities.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703192527/IndustriaPro_rfn8o9.png"
        },
        {
            id: 3,
            dato: "AI Integration",
            complemento: "Our AI Integration service redefines business decision-making and data-driven management. We implement advanced solutions that integrate artificial intelligence directly into operations, empowering your business decisions with advanced data analysis and processing.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703192191/IA_gaoacz.png"
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
                <h3 className={style.tituloBanner}> {idiomaActual === "es" ? "Servicios":"Services"} </h3>
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
                        <NavLink to="https://calendar.app.google/kMU77i3fWoS9cb3WA" target="_blank">
                <button className={style.callBotonBan}>{idiomaActual === "es" ? "SOLICITAR COTIZACIÓN":"REQUEST A QUOTE"}</button>
                </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerServicios