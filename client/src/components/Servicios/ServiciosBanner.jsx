import style from "./servicios.module.css"
import {useSelector } from "react-redux"

const BannerServicios = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            id: 1,
            dato: "Desarrollos a la medida",
            complemento: "En Tecde, compartimos la convicción de que cada empresa es única. Nos especializamos en ofrecer desarrollo de software y productos a medida, entendiendo los desafíos específicos de tu industria. Descubre cómo personalizamos soluciones para impulsar el éxito de Tecde y transformar tus procesos empresariales.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703089628/tc_tecde_zp7jvh.png"
        },
        {
            id: 2,
            dato: "On boarding IndustrIA Pro",
            complemento: "Nuestro servicio de OnBoarding para IndustrIA Pro de Tecde está diseñado para preparar a tu empresa de manera integral. Guiamos a tu equipo a través de una implementación fluida, proporcionando capacitación detallada y personalizada, asegurando que aproveches al máximo sus capacidades.",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703192527/IndustriaPro_rfn8o9.png"
        },
        {
            id: 3,
            dato: "Integración de IA",
            complemento: "Nuestro servicio de Integración de IA redefine la toma de decisiones empresariales y la gestión basada en datos. Implementamos soluciones avanzadas que integran inteligencia artificial directamente en las operaciones, potenciando tus decisiones comerciales con análisis y procesamiento de datos avanzados. ",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703192191/IA_gaoacz.png"
        },
    ]
    const datosEN = [
        {
            id: 1,
            dato: "IBM",
            complemento: "Global technology innovation leader",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703179613/TECDE/img_iz0t6p.png"
        },
        {
            id: 2,
            dato: "TEC de Monterrey",
            complemento: "#1 in Mexico according to Raking QS 2024",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703180510/TECDE/tecnologico-de-monterrey-white_evfvrj.png"
        },
        {
            id: 3,
            dato: "Universidad Nacional",
            complemento: "Academic leader in Colombia",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703180612/TECDE/PNG_LOGOSIMBOLO_LATERAL_BLANCO-02_jqahn1.png"
        },
        {
            id: 4,
            dato: "Dassault Systèmes",
            complemento: "Leader in product design innovation",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703181028/TECDE/DSY.PA_BIG.D-f1789d0b_cdcuht.png"
        },
        // {
        //     id: 5,
        //     dato: "Google Cloud",
        //     complemento: "World's #1 development platform",
        //     logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703181613/TECDE/Logo-Google-Cloud_jm2ys2.png"
        // },
        {
            id: 6,
            dato: "Mentor Day",
            complemento: "Spain's first gradual accelerator",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703181752/TECDE/mentorDay-blanco_ado7ms.png"
        },
        // {
        //     id: 7,
        //     dato: "Henry",
        //     complemento: "Tech professionals from all over LATAM",
        //     logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703182185/TECDE/logo-white_wu6pp3.png"
        // },
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerServicios