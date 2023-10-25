import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Contacto/Spinner"; // Reemplaza "Spinner" con el nombre de tu componente de spinner
import style from "./trabaja.module.css";

const Trabaja = () => {
    const idiomaActual = useSelector((state) => state.idioma);
    const [formId, setFormId] = useState("");
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const handleLoad = () => {
        setTimeout(()=> {setScriptLoaded(true)}, 1000)
    }
    useEffect(() => {
        // Cargar el script de Typeform después de que el componente se monte
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
        setFormId(idiomaActual === "es" ? "01HD83KEMN3ESVGQ4YTB3BGQ0Y" : "01HD83KEMN3ESVGQ4YTB3BGQ0Y");
        handleLoad()
    }, [idiomaActual, handleLoad]);
    return (
        <div className={style.divBanner}>
            <div className={style.divTextoContacto}>
                <h1 className={style.contactoTitulo}>
                    {idiomaActual === "es" ? "Trabaja con nosotros" : "Work with us"}
                </h1>
                <h2 className={style.contactoParrafo}>
                    {idiomaActual === "es"
                        ? "Sé parte del talento que revolucionará la ingeniería en Latinoamérica"
                        : "Be part of the talent that will revolutionize engineering in Latin America"}
                </h2>
            </div>
            <div className={style.divForm}>
                {scriptLoaded ? (
                    <div className={style.butonForm} data-tf-live={formId}></div>
                ) : (
                    <Spinner/> // Muestra el spinner mientras se carga el script
                )}
            </div>
        </div>
    );
};

export default Trabaja;