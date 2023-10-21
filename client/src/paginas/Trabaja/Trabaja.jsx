import style from "./trabaja.module.css"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react";

const Trabaja = () => {
    const idiomaActual = useSelector((state) => state.idioma);
    const [formId, setFormId] = useState("");
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
        setFormId(idiomaActual === "es" ? "01HD83KEMN3ESVGQ4YTB3BGQ0Y" : "01HD83KEMN3ESVGQ4YTB3BGQ0Y");
        return () => {
            document.body.removeChild(script);
        };
    }, [idiomaActual]);
    return (
        <div className={style.divBanner}>
            <div className={style.divTextoContacto}>
            <h1 className={style.contactoTitulo}>{idiomaActual === "es" ? "Trabaja con nosotros":"Work with us"}</h1>
            <h2 className={style.contactoParrafo}>{idiomaActual === "es" ? "Sé parte del talento que revolucionará la ingeniería en Latinoamérica":"Be part of the talent that will revolutionize engineering in Latin America"}</h2>
            </div>
            <div className={style.divForm}>
                <div className={style.butonForm} data-tf-live={formId}></div>
            </div>
        </div>
    )
}

export default Trabaja