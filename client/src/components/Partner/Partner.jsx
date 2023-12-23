import style from "./partner.module.css"
import {useSelector } from "react-redux"

const BannerPartner = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = [
        {
            id: 1,
            dato: "IBM",
            complemento: "Lider de innovación tecnológica global",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703179613/TECDE/img_iz0t6p.png"
        },
        {
            id: 2,
            dato: "TEC de Monterrey",
            complemento: "#1 de México según Raking QS 2024",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703180510/TECDE/tecnologico-de-monterrey-white_evfvrj.png"
        },
        {
            id: 3,
            dato: "Universidad Nacional",
            complemento: "Líder académico en Colombia",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703180612/TECDE/PNG_LOGOSIMBOLO_LATERAL_BLANCO-02_jqahn1.png"
        },
        {
            id: 4,
            dato: "Dassault Systèmes",
            complemento: "Líder en innovación en diseño de producto",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703181028/TECDE/DSY.PA_BIG.D-f1789d0b_cdcuht.png"
        },
        // {
        //     id: 5,
        //     dato: "Google Cloud",
        //     complemento: "Plataforma de desarrollo #1 en el mundo",
        //     logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703181613/TECDE/Logo-Google-Cloud_jm2ys2.png"
        // },
        {
            id: 6,
            dato: "Mentor Day",
            complemento: "Primera aceleradora graduda de España",
            logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703181752/TECDE/mentorDay-blanco_ado7ms.png"
        },
        // {
        //     id: 7,
        //     dato: "Henry",
        //     complemento: "Profesionales Tech de todo LATAM",
        //     logo: "https://res.cloudinary.com/dfmsezslx/image/upload/v1703182185/TECDE/logo-white_wu6pp3.png"
        // },
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
                <h3 className={style.tituloBanner}> {idiomaActual === "es" ? "Nuestros partners":"Our partners"} </h3>
                <div className={style.bannerUs}>
                    <div className={style.divDatos}>
                        {datosDisplay.map((dato) => (
                        <div key={dato.id} className={style.divDato}>
                            <div className={style.numero}>
                            <img className={style.img} src={dato.logo} alt={"logo " + dato.dato} />
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

export default BannerPartner