import style from "./threebanner.module.css"
import { NavLink} from "react-router-dom"
import { useEffect } from "react";
import {useSelector } from "react-redux"

const ThreeBanner = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const imagenes = [
        "https://res.cloudinary.com/dfmsezslx/image/upload/v1697130276/TECDE/undraw_code_review_re_woeb_1_eazu2u.svg",
        "https://res.cloudinary.com/dfmsezslx/image/upload/v1697129448/TECDE/undraw_design_components_9vy6_1_xhbrgg.svg",
        "https://res.cloudinary.com/dfmsezslx/image/upload/v1697130444/TECDE/undraw_progressive_app_m-9-ms_1_mrthcz.svg",
        "https://res.cloudinary.com/dfmsezslx/image/upload/v1697129384/TECDE/undraw_visionary_technology_re_jfp7_1_r99eqa.svg"
    ];


    const textoEs = [
        "Desarrollo de software en la nube",
        "Diseño y consultoria para equipos y plantas",
        "Integración de IA para la mejora de procesos y plantas",
        "Automatización y mejora de procesos productivos y administrativos"
    ];
    const textIng = [
        "Cloud software development",
        "Design and consulting for teams and plants",
        "AI integration for process and plant enhancement",
        "Automation and improvement of production and administrative processes"
    ];

    var texto = [];
    if (idiomaActual === "es") {
        texto = [...textoEs];
    } 
    else {
        texto = [...textIng];
    }

    const cards = imagenes.map((imagen, index) => ({
        imagen,
        texto: texto[index]
    }));

    useEffect(() => {
        // Cargar el script de Typeform después de que el componente se monte
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Eliminar el script si el componente se desmonta
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h3 className={style.tituloBanner}>{idiomaActual === "es" ? "¿Cómo lo hacemos en TECDE?":"How do we do it at TECDE?"}</h3>
                <div className={style.cardsThree}>
                    {cards.map((card) => (
                        <div className={style.card} key={card.imagen}>
                            <img className={style.imgCard} src={card.imagen} alt="Ilustración" />
                            <h4 className={style.parrafoCard}>{card.texto}</h4>
                        </div>
                    ))}
                </div>
                <NavLink to="/servicios">
                    <button className={style.callBoton}>{idiomaActual === "es" ? "Ver más":"Read more"}</button>
                </NavLink>
                <div className={style.divContacto}>
                    <div className={style.divTextoContacto}>
                        <h3 className={style.contactoTitulo}>{idiomaActual === "es" ? "¿Tienes algún proyecto o alguna oportunidad de mejora para tu empresa?":"Do you have a project or improvement opportunity for your company?"} </h3>
                        <h4 className={style.contactoParrafo}>{idiomaActual === "es" ? "¡Contactanos y comencemos a trabajar juntos!":"Contact us and let's start working together!"}</h4>
                    </div>
                    <div className={style.divForm}>
                        <img className={style.imgForm} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1697132510/TECDE/undraw_work_together_re_5yhn_1_cdppnr.svg" alt="WorToghether" />
                        <div className={style.butonForm} data-tf-live="01HCJN3BRHRYAX0X5ZF9W7VYPA"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeBanner;